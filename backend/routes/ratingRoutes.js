// wa_ss24_primeflex/backend/routes/ratingRoutes.js
const express = require('express');
const router = express.Router();
const {getAllRatings} = require("../controllers/ratingController");

router.get('/api/ratings', getAllRatings);

module.exports = router;