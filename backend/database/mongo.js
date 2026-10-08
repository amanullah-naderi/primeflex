// wa_ss24_primeflex/backend/database/mongo.js
import dotenv from 'dotenv';

dotenv.config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/primeflex', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    username: String, password: String, email: String
});

const filmSchema = new mongoose.Schema({
    title: String, director: String, genre: String, releaseYear: Number
});

const ratingSchema = new mongoose.Schema({
    movieId: Number, rating: Number, userId: String
});

const serieSchema = new mongoose.Schema({
    title: String, genre: String, seasons: Number
});

const trendSchema = new mongoose.Schema({
    title: String, movieId: Number, trendingScore: Number
});

const userRatingSchema = new mongoose.Schema({
    userId: String, movieId: Number, rating: Number
});

const Account = mongoose.model('Account', userSchema);
const Film = mongoose.model('Film', filmSchema);
const Rating = mongoose.model('Rating', ratingSchema);
const Serie = mongoose.model('Serie', serieSchema);
const Trend = mongoose.model('Trend', trendSchema);
const UserRating = mongoose.model('UserRating', userRatingSchema);

module.exports = { Account, Film, Rating, Serie, Trend, UserRating };