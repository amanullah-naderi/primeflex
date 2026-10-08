/* wa_ss24_primeflex/frontend/src/components/homepage/AddReview.js */
import React, { useState, useRef, useEffect } from 'react';
import '../styles/AddReview.css';

const AddReview = ({ videos }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [addedReviews, setAddedReviews] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [formError, setFormError] = useState('');
    const titleInputRef = useRef(null);

    useEffect(() => {
        const storedReviews = localStorage.getItem('addedReviews');
        if (storedReviews) {
            setAddedReviews(JSON.parse(storedReviews));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('addedReviews', JSON.stringify(addedReviews));
    }, [addedReviews]);

    const handleTitleChange = (value) => {
        setTitle(value);
    };

    const handleSelectTitle = (selectedTitle) => {
        setTitle(selectedTitle);
    };

    const filteredSuggestions = videos.filter(video =>
        video.title.toLowerCase().includes(title.toLowerCase())
    );

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || rating === 0) {
            setFormError('Please fill in all fields and select a rating.');
            return;
        }

        setLoading(true);

        try {
            if (editIndex !== -1) {
                const updatedReviews = [...addedReviews];
                updatedReviews[editIndex] = { title, description, rating };
                setAddedReviews(updatedReviews);
                setEditIndex(-1);
            } else {
                const newReview = { title, description, rating };
                setAddedReviews([...addedReviews, newReview]);
            }
            setTitle('');
            setDescription('');
            setRating(0);
            setFormError('');
        } catch (error) {
            console.error('Error adding/reviewing:', error);
            alert('Failed to add/review. Please try again.');
        }

        setLoading(false);
    };

    const handleEditReview = (index) => {
        const reviewToEdit = addedReviews[index];
        setTitle(reviewToEdit.title);
        setDescription(reviewToEdit.description);
        setRating(reviewToEdit.rating); // Bewertung setzen
        setEditIndex(index);
    };

    const handleDeleteReview = (index) => {
        const updatedReviews = [...addedReviews];
        updatedReviews.splice(index, 1);
        setAddedReviews(updatedReviews);
    };

    return (
        <div className="container">
            <div className="formContainer">
                <h2>Rating</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="formInput"
                        ref={titleInputRef}
                    />
                    {title && filteredSuggestions.length > 0 && (
                        <ul className="suggestions">
                            {filteredSuggestions.map(video => (
                                <li
                                    key={video.id}
                                    onClick={() => handleSelectTitle(video.title)}
                                    className="reviewItem"
                                >
                                    {video.title}
                                </li>
                            ))}
                        </ul>
                    )}
                    <textarea
                        placeholder="Comments"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="textArea"
                    ></textarea>
                    <div>
                        <span>Rating: </span>
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleStarClick(index + 1)}
                                style={{ cursor: 'pointer' }}
                            >
                                {index < rating ? '★' : '☆'}
                            </span>
                        ))}
                    </div>
                    {formError && <div className="error-message">{formError}</div>}
                    <button type="submit" disabled={loading} className="submitButton">
                        {loading ? 'Adding...' : editIndex !== -1 ? 'Save Changes' : 'Add Review'}
                    </button>
                </form>
            </div>

            <div className="reviewList">
                <h3>Reviews</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {addedReviews.map((review, index) => (
                        <li key={index} className="reviewItem">
                            <strong>{review.title}</strong>: {review.description}
                            <br />
                            <p style={{ textAlign: "center" }}>Rating:
                                {Array.from({ length: review.rating }, (_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </p>
                            <button
                                className="editButton"
                                onClick={() => handleEditReview(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="deleteButton"
                                onClick={() => handleDeleteReview(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddReview;