// wa_ss24_primeflex/backend/controllers/trendsController.js
const Trend = require('../models/Trend');

exports.getAllTrends = async (req, res) => {
    try {
        const trends = await Trend.find();
        res.json(trends);
    } catch (error) {
        console.error('Error fetching trends:', error);
        res.status(500).json({ error: 'Server error' });
    }
};