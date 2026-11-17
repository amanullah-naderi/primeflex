// wa_ss24_primeflex/frontend/src/components/pages/RatingPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RatingPage.css';
import logo from '../images/logo.svg';

const RatingPage = () => {
    const [ratings, setRatings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '29d4407cfdmsh6d2b236182761e4p142b4ejsn6a4a6fa0a39a',
                    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
                setRatings(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching ratings:', error);
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="rating-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>
            <h2>Rating Page (PrimeFlex)</h2>
            {loading && !error ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error fetching ratings. Please try again later.</p>
            ) : ratings.length === 0 ? (
                <p>No ratings available.</p>
            ) : (
                <ul>
                    {ratings.map((rating, index) => (
                        <li key={index}>
                            <p>Film/Serie: {rating.originalTitleText.text}</p>
                            <p>Rating: {rating.ratingsSummary.aggregateRating}</p>
                            <p>Vote Count: {rating.ratingsSummary.voteCount}</p>
                            <p>Release Year: {rating.releaseYear.year}</p>
                            <img src={rating.primaryImage.imageUrl} alt="Film" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RatingPage;