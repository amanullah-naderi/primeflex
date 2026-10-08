// wa_ss24_primeflex/backend/models/UserRating.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRatingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    film: {
        type: Schema.Types.ObjectId,
        ref: 'Film',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserRating', UserRatingSchema);