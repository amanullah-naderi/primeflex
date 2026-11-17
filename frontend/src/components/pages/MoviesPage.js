// wa_ss24_primeflex/frontend/src/components/pages/MoviesPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MoviesPage.css';
import logo from '../images/logo.svg';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '29d4407cfdmsh6d2b236182761e4p142b4ejsn6a4a6fa0a39a',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
                setMovies(data);
                setLoading(false);
            } catch (error) {
                console.error('Fehler beim Abrufen der Filme:', error);
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="movies-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>
            <h2 style={{textAlign: "center"}}>Movies Page (PrimeFlex)</h2>
            {loading && !error ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error fetching movies. Please try again later.</p>
            ) : movies.length === 0 ? (
                <p>No movies available.</p>
            ) : (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <div className="movie-item">
                                <img src={movie.image} alt={movie.title} className="movie-image" />
                                <div className="movie-details">
                                    <h3>{movie.title}</h3>
                                    <p>{movie.description}</p>
                                    <p>Genres: {movie.genre.join(', ')}</p>
                                    <p>Rating: {movie.rating}</p>
                                    <p>Release Year: {movie.year}</p>
                                    <a href={movie.imdb_link} target="_blank" rel="noopener noreferrer">IMDb Link</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MoviesPage;