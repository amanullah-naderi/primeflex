// wa_ss24_primeflex/frontend/src/components/pages/SignUpPage.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/SignUpPage.css'
import logo from "../images/logo.svg";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [formError, setFormError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formData).some(value => value.trim() === '')) {
            setFormError('Please fill in all fields.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setFormError('Passwords do not match.');
            return;
        }
        try {
            const response = await fetch('http://localhost:10034/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                history.push('/signin');
            } else {
                const errorData = await response.json();
                setFormError(errorData.error || 'Sign up failed');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Network error. Please try again later.');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="sign-up-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={handleChange} value={formData.username}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}/>

                <label htmlFor="password">Password:</label>
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" onChange={handleChange}
                       value={formData.password}/>

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword"
                       onChange={handleChange} value={formData.confirmPassword}/>

                <div className="show-password-checkbox">
                    <input
                        type="checkbox"
                        id="showPassword"
                        name="showPassword"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                    />
                    <label htmlFor="showPassword"></label>
                </div>

                <button type="submit">Sign up</button>
                {formError && <div className="error-message">{formError}</div>}
                <div className="button-container">
                    <Link to="/signin" className="signup-link">Already have an account? Sign In</Link>
                    <Link to="/" className="cancel-button">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default SignUpPage;