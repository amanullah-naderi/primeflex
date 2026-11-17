// wa_ss24_primeflex/backend/routes/userRatingRoutes.js
const express = require('express');
const router = express.Router();
const userRatingController = require('../controllers/userRatingController');

router.post('/api/user-ratings', userRatingController.addRating);
router.get('/api/user-ratings/:filmId', userRatingController.getRatingsForFilm);

module.exports = router;