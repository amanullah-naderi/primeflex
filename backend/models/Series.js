// wa_ss24_primeflex/backend/models/Series.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeriesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    big_image: String,
    genre: [String],
    releaseYear: {
        type: Number,
        required: true
    },
    director: String,
    actors: [String],
    duration: Number,
    thumbnail: String,
    rating: String,
    imdbid: String,
    imdb_link: String
});

module.exports = mongoose.model('Series', SeriesSchema);