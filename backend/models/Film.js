// wa_ss24_primeflex/backend/models/Film.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    big_image: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    releaseYear: {
        type: Number,
        required: true,
        min: 1888
    },
    director: {
        type: String,
        required: true
    },
    actors: {
        type: [String],
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 1
    },
    thumbnail: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    imdbid: {
        type: String,
        required: true
    },
    imdb_link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Film', FilmSchema);