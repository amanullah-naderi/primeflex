// wa_ss24_primeflex/backend/controllers/userRatingController.js
const UserRating = require('../models/UserRating');

exports.addRating = async (req, res) => {
    try {
        const { user, film, rating, review } = req.body;
        const userRating = new UserRating({
            user,
            film,
            rating,
            review
        });
        await userRating.save();
        res.status(201).json(userRating);
    } catch (error) {
        console.error('Error adding rating:', error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getRatingsForFilm = async (req, res) => {
    try {
        const filmId = req.params.filmId;
        const ratings = await UserRating.find({ film: filmId });
        res.json(ratings);
    } catch (error) {
        console.error('Error fetching ratings for film:', error);
        res.status(500).json({ error: 'Server Error' });
    }
};