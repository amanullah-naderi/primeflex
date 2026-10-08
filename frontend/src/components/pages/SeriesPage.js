// wa_ss24_primeflex/frontend/src/components/pages/SeriesPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SeriesPage.css';
import logo from '../images/logo.svg';

const SeriesPage = () => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const storedSeries = localStorage.getItem('series');
            if (storedSeries) {
                setSeries(JSON.parse(storedSeries));
                setLoading(false);
            } else {
                const url = 'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies';
                const options = {
                    method: 'POST',
                    headers: {
                        'x-rapidapi-key': '29d4407cfdmsh6d2b236182761e4p142b4ejsn6a4a6fa0a39a',
                        'x-rapidapi-host': 'imdb188.p.rapidapi.com',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        country: {
                            anyPrimaryCountries: ['IN']
                        },
                        limit: 200,
                        releaseDate: {
                            releaseDateRange: {
                                end: '2029-12-31',
                                start: '2020-01-01'
                            }
                        },
                        userRatings: {
                            aggregateRatingRange: { max: 10, min: 6 },
                            ratingsCountRange: { min: 1000 }
                        },
                        genre: {
                            allGenreIds: ['Action']
                        },
                        runtime: {
                            runtimeRangeMinutes: { max: 120, min: 0 }
                        }
                    })
                };
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log(data);
                    if (data.status && data.data.list) {
                        setSeries(data.data.list);
                        localStorage.setItem('series', JSON.stringify(data.data.list));
                    } else {
                        throw new Error('Invalid response format');
                    }
                    setLoading(false);
                } catch (error) {
                    console.error('Fehler beim Abrufen der Serien:', error);
                    setError(true);
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, []);

    const handleReleaseYearChange = async (event, index) => {
        const newSeries = [...series];
        newSeries[index].title.releaseYear.year = event.target.value;
        setSeries(newSeries);
        const updateUrl = process.env.REACT_APP_IMDB_RAPIDAPI_HOST;
        const updateOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSeries[index])
        };

        try {
            const response = await fetch(updateUrl, updateOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Release Year erfolgreich aktualisiert:', newSeries[index]);
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Release Year:', error);
        }
    localStorage.setItem('series', JSON.stringify(newSeries));
    };

    const handleRatingChange = async (event, index) => {
        const newSeries = [...series];
        newSeries[index].title.ratingsSummary.aggregateRating = parseFloat(event.target.value);
        setSeries(newSeries);
        const updateUrl = process.env.REACT_APP_IMDB_RAPIDAPI_HOST;
        const updateOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSeries[index])
        };

        try {
            const response = await fetch(updateUrl, updateOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Rating erfolgreich aktualisiert:', newSeries[index]);
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Ratings:', error);
        }
        localStorage.setItem('series', JSON.stringify(newSeries));
    };

    return (
        <div className="series-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>
            <h2 style={{ textAlign: "center" }}>Series Page (PrimeFlex)</h2>
            {loading && !error ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error fetching series. Please try again later.</p>
            ) : series.length === 0 ? (
                <p>No series available.</p>
            ) : (
                <ul>
                    {series.map((serie, index) => (
                        <li key={index}>
                            <div className="serie-item">
                                <img src={serie.title.primaryImage.imageUrl} alt={serie.title.titleText.text} className="serie-image" />
                                <div className="serie-details">
                                    <h3>{serie.title.titleText.text}</h3>
                                    <p>
                                        Rating:
                                        <input
                                            type="number"
                                            value={serie.title.ratingsSummary.aggregateRating}
                                            onChange={(event) => handleRatingChange(event, index)}
                                        />
                                    </p>
                                    <p>
                                        Release Year:
                                        <input
                                            type="text"
                                            value={serie.title.releaseYear.year}
                                            onChange={(event) => handleReleaseYearChange(event, index)}
                                        />
                                    </p>
                                    <a href={`https://www.imdb.com/title/${serie.title.id}`} target="_blank" rel="noopener noreferrer">IMDb Link</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SeriesPage;