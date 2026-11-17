// wa_ss24_primeflex/backend/controllers/searchController.js
const Film = require('../models/Film');
const Series = require('../models/Series');
const Trend = require('../models/Trend');

exports.search = async (req, res) => {
    try {
        const { query } = req.query;
        const films = await Film.find({ $text: { $search: query } });
        const series = await Series.find({ $text: { $search: query } });
        const trends = await Trend.find({ $text: { $search: query } });
        res.json({ films, series, trends });
    } catch (error) {
        console.error('Error searching:', error);
        res.status(500).json({ error: 'Server error' });
    }
};