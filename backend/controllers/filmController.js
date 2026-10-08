// wa_ss24_primeflex/backend/controllers/filmController.js
const { validationResult } = require('express-validator');
const Film = require('../models/Film');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600 });

exports.getAllFilms = async (req, res) => {
    try {
        const cachedFilms = cache.get('films');
        if (cachedFilms) {
            console.log('Daten aus dem Cache abgerufen');
            return res.status(200).json(cachedFilms);
        }

        const films = await Film.find();
        cache.set('films', films);

        res.status(200).json(films);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Serverfehler');
    }
};

exports.createFilm = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {
            title, description, genre, releaseYear, director, actors,
            duration, image, big_image, thumbnail, rating, imdbid, imdb_link
        } = req.body;

        const newFilm = new Film({
            title, description, genre, releaseYear, director, actors,
            duration, image, big_image, thumbnail, rating, imdbid, imdb_link
        });

        const film = await newFilm.save();

        const filmsInCache = cache.get('films');
        if (filmsInCache) {
            const updatedFilms = [...filmsInCache, film];
            cache.set('films', updatedFilms);
        }

        res.status(201).json(film);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Serverfehler' });
    }
};