// wa_ss24_primeflex/backend/services/externalAPIService.js
const axios = require('axios');
require('dotenv').config();

exports.getIMDBTop100Movies = async () => {
    const options = {
        method: 'GET',
        url: 'https://' + process.env.REACT_APP_IMDB_RAPIDAPI_HOST + '/',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_IMDB_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_IMDB_RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Fehler beim Abrufen der IMDB Top 100 Filme');
    }
};

exports.getIMDBTop100Series = async () => {
    const options = {
        method: 'GET',
        url: 'https://' + process.env.REACT_APP_IMDB_RAPIDAPI_HOST + '/series/',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_IMDB_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_IMDB_RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Fehler beim Abrufen der IMDB Top 100 Serien');
    }
};

exports.getMovieRatings = async () => {
    const options = {
        method: 'GET',
        url: 'https://' + process.env.REACT_APP_MOVIES_RATING_RAPIDAPI_HOST + '/api/v1/getWeekTop10',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_MOVIES_RATING_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_MOVIES_RATING_RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Fehler beim Abrufen der Film-Bewertungen');
    }
};

exports.getSearch = async () => {
    const options = {
        method: 'GET',
        url: 'https://' + process.env.REACT_APP_MOVIES_RATING_RAPIDAPI_HOST + '/api/v1/searchIMDB?query',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_MOVIES_RATING_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_MOVIES_RATING_RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Fehler beim Abrufen der Film-Bewertungen');
    }
};