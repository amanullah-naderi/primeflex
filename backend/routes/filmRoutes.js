// wa_ss24_primeflex/backend/routes/filmRoutes.js
const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');
const { body } = require('express-validator');

const filmValidationRules = [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('description').not().isEmpty().withMessage('Description is required'),
    body('genre').isArray().withMessage('Genre must be an array'),
    body('releaseYear').isNumeric().withMessage('Release year must be a number'),
    body('director').not().isEmpty().withMessage('Director is required'),
    body('actors').isArray().withMessage('Actors must be an array'),
    body('duration').isNumeric().withMessage('Duration must be a number'),
    body('image').not().isEmpty().withMessage('Image is required'),
    body('big_image').not().isEmpty().withMessage('Big image is required'),
    body('thumbnail').not().isEmpty().withMessage('Thumbnail is required'),
    body('rating').not().isEmpty().withMessage('Rating is required'),
    body('imdbid').not().isEmpty().withMessage('IMDB ID is required'),
    body('imdb_link').not().isEmpty().withMessage('IMDB link is required')
];

router.get('/api/films', filmController.getAllFilms);
router.post('/api/films', filmValidationRules, filmController.createFilm);

module.exports = router;