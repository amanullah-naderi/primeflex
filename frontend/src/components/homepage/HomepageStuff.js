// wa_ss24_primeflex/frontend/src/components/homepage/HomepageStuff.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/logo.svg';
import head1Img from '../images/head1_.png';
import head2Img from '../images/head2_.png';
import head3Img from '../images/head3_.png';

const HomepageStuff = ({ openNav, closeNav, sidebarOpen }) => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const history = useHistory();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedRole = localStorage.getItem('role');
        if (storedUsername) {
            setUsername(storedUsername);
        }
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);

    const handleAdminLinkClick = () => {
        if (role === 'admin') {
            history.push('/admin');
        }
    };

    return (
        <div>
            <header className="App-header">
                <div className="header-controls">
                    <Link to="/signin" className="openbtn" style={{textDecoration: 'none'}}>Login</Link>
                    {username && role === 'admin' && (
                        <span onClick={handleAdminLinkClick} className="admin-link" style={{textDecoration: 'none', color: 'red'}}>Admin</span>
                    )}
                    <button className="openbtn" onClick={openNav}>Menu ☰</button>
                </div>
                <h1>Unbegrenzt Filme, Serien und mehr</h1>
                <p>Genießen Sie Primeflex, wo immer Sie möchten. Jederzeit kündbar.</p>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
                {username ? (
                    <span>{username} ({role === 'admin' ? 'Admin' : 'User'})</span>
                ) : (
                    <span>Guest</span>
                )}
            </header>

            <div id="mySidebar" className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="closebtn" onClick={closeNav}>×</button>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/trends">Trends</Link>
                <Link to="/rating">Rating</Link>
                <Link to="/search">Search</Link>
                <Link to="/installation">Installation</Link>
                <Link to="/documentation">Documentation</Link>
            </div>

            <div id="main" className={sidebarOpen ? 'shifted' : ''}>
            </div>

            <div className="tv-section1">
                <div>
                    <h2>Auf Ihrem Fernseher</h2>
                    <p>Streamen Sie mit Smart-TVs, Playstation, Xbox,</p>
                    <p>Chromecast, Apple TV, Blu-ray-Player u. v. m.</p>
                </div>
                <img src={head1Img} alt="Bild"/>
            </div>

            <div className="tv-section2">
                <div>
                    <h2>Auf allen Geräten</h2>
                    <p>Sie können unbegrenzt Filme und Serien auf</p>
                    <p>Ihrem Smartphone, Tablet, Laptop und Fernseher</p>
                    <p> ansehen.</p>
                    <p>Serien herunterladen und offline ansehen</p>
                    <p>Egal wo: im Flugzeug, im Zug</p>
                    <p>oder sogar im U-Boot …</p>
                </div>
                <img src={head2Img} alt="Bild"/>
            </div>

            <div className="tv-section1">
                <div>
                    <h2>Profile für Kinder erstellen</h2>
                    <p>Schicken Sie Kinder auf Abenteuer mit ihren</p>
                    <p>Lieblingsfiguren in einem speziell auf ihre</p>
                    <p>Bedürfnisse abgestimmten Kids-Bereich, der</p>
                    <p>ohne Aufpreis in Ihrer Mitgliedschaft inbegriffen ist.</p>
                </div>
                <img src={head3Img} alt="Bild"/>
            </div>
        </div>
    );
};

export default HomepageStuff;