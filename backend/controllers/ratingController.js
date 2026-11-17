// wa_ss24_primeflex/backend/controllers/ratingController.js
const Rating = require('../models/Rating');

exports.getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.find();
        res.json(ratings);
    } catch (error) {
        console.error('Error fetching ratings:', error);
        res.status(500).json({ error: 'Server error' });
    }
};