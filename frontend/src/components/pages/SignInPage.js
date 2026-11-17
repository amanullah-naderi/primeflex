// wa_ss24_primeflex/frontend/src/components/pages/SignInPage.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/SignInPage.css';
import logo from "../images/logo.svg";

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formError, setFormError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email.trim() === '' || formData.password.trim() === '') {
            setFormError('Please fill in all fields.');
            return;
        }
        try {
            const response = await fetch('http://localhost:10034/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('authToken', token);
                history.push('/');
            } else {
                const errorData = await response.json();
                setFormError(errorData.error);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setFormError('Network error. Please try again later.');
        }
    };

    return (
        <div className="sign-in-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>
            <header>
                <h1>Sign in</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                {formError && <div className="error-message">{formError}</div>}

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

                <button type="submit">Sign in</button>
                <div className="button-container">
                    <Link to="/signup" className="signup-link">Don't have an account? Sign Up</Link>
                    <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                    <Link to="/" className="cancel-button">Cancel</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;