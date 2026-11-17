// wa_ss24_primeflex/frontend/src/components/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SearchPage.css';
import logo from '../images/logo.svg';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (searchQuery.trim() === '') {
                setSearchResults([]);
                return;
            }

            setLoading(true);
            setError(false);

            const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${searchQuery}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '29d4407cfdmsh6d2b236182761e4p142b4ejsn6a4a6fa0a39a',
                    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setSearchResults(data.data || []);
                setLoading(false);
            } catch (error) {
                console.error('Fehler beim Abrufen der Suchergebnisse:', error);
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="search-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>
            <h2 style={{ textAlign: "center" }}>Search Page (PrimeFlex)</h2>
            <div className="search-form">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for something..."
                />
            </div>
            {loading && !error ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error fetching search results. Please try again later.</p>
            ) : searchResults.length === 0 ? (
                <p>No results found for "{searchQuery}".</p>
            ) : (
                <ul className="search-results">
                    {searchResults.map((result, index) => (
                        <li key={index}>
                            <div className="search-result">
                                <h3>{result.title}</h3>
                                <p>ID: {result.id}</p>
                                <p>Year: {result.year}</p>
                                <p>Stars: {result.stars}</p>
                                <img src={result.image} alt="data" />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchPage;