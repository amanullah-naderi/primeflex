// wa_ss24_primeflex/backend/routes/seriesRoutes.js
const express = require('express');
const router = express.Router();
const {getAllSeries} = require("../controllers/seriesController");

router.get('/api/search', getAllSeries);

module.exports = router;