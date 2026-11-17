// wa_ss24_primeflex/backend/controllers/seriesController.js
const Series = require('../models/Series');

exports.getAllSeries = async (req, res) => {
    try {
        const series = await Series.find();
        res.json(series);
    } catch (error) {
        console.error('Error fetching series:', error);
        res.status(500).json({ error: 'Server error' });
    }
};