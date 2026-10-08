// wa_ss24_primeflex/frontend/src/components/pages/TrendsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TrendsPage.css';
import logo from '../images/logo.svg';

const TrendsPage = () => {
    const [trends, setTrends] = useState([]);
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
                const filteredMovies = data.filter(movie => movie.year >= 2000 && movie.rating > 5);
                const sortedMovies = filteredMovies.sort((a, b) => b.rating - a.rating);
                const topMovies = sortedMovies.slice(0, 10);
                setTrends(topMovies);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trends:', error);
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="trends-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>
            <h2 style={{textAlign: "center"}}>Trends Page (PrimeFlex)</h2>
            {loading && !error ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error fetching trends. Please try again later.</p>
            ) : trends.length === 0 ? (
                <p>No trends available.</p>
            ) : (
                <div className="slider-container">
                    <div className="scroll-arrow">&#9664;</div>
                    <div className="slider">
                    {trends.map((trend, index) => (
                            <div key={index} className="slider-item">
                                <div className="trend-item">
                                    <h3>{trend.title}</h3>
                                    <p>{trend.description}</p>
                                    <p>Genres: {trend.genre.join(', ')}</p>
                                    <p>Rating: {trend.rating}</p>
                                    <p>Year: {trend.year}</p>
                                    <a href={trend.imdb_link} target="_blank" rel="noopener noreferrer">IMDb Link</a>
                                    {trend.image && (
                                        <img src={trend.image} alt={trend.title}/>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrendsPage;