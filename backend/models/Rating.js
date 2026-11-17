// wa_ss24_primeflex/backend/models/Rating.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    film: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Rating', ratingSchema);