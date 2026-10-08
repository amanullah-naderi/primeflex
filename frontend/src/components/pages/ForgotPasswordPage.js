// wa_ss24_primeflex/frontend/src/components/pages/AdminPage.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../styles/ForgotPasswordPage.css';
import logo from "../images/logo.svg";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [resetEmailSent, setResetEmailSent] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [resetError, setResetError] = useState('');
    const history = useHistory(); // Add this line

    useEffect(() => {
        if (resetEmailSent) {
            const timer = setTimeout(() => {
                setResetEmailSent(false);
            }, 3 * 60 * 1000); // 3 minutes

            return () => clearTimeout(timer);
        }
    }, [resetEmailSent]);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/user/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                setResetEmailSent(true);
                setPasswordResetSuccessful(true);
            } else {
                const data = await response.json();
                setResetError(data.error || 'Error resetting password. Please try again.');
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            setResetError('Error resetting password. Please try again.');
        }
    };

    const handleSetNewPassword = async (e) => {
        e.preventDefault();
        try {
            if (newPassword !== confirmNewPassword) {
                throw new Error('New passwords do not match.');
            }
            const response = await fetch('/api/user/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });
            if (response.ok) {
                const updateResponse = await fetch('/api/user/update-password', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ newPassword }),
                });
                if (updateResponse.ok) {
                    history.push('/signin');
                } else {
                    const data = await updateResponse.json();
                    setResetError(data.error || 'Error updating password.');
                }
            } else {
                const data = await response.json();
                setResetError(data.error || 'Error setting new password.');
            }
        } catch (error) {
            console.error('Error setting new password:', error);
            setResetError('Error setting new password. Please try again.');
        }
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const renderResetPasswordForm = () => {
        return (
            <form onSubmit={handleResetPassword}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Link to="/" className="signup-link">Cancel</Link>
                <button type="submit">Reset Password</button>
            </form>
        );
    };

    const renderSetNewPasswordForm = () => {
        return (
            <form onSubmit={handleSetNewPassword}>
                <label htmlFor="newPassword">New Password:</label>
                <input
                    type={showNewPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    type="checkbox"
                    id="showNewPassword"
                    name="showNewPassword"
                    checked={showNewPassword}
                    onChange={toggleShowNewPassword}
                />
                <label htmlFor="showNewPassword">Show Password</label>
                <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Set New Password</button>
            </form>
        );
    };

    return (
        <div className="forgot-password-page sign-in-page">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>
            <h3>Forgot Password?</h3>
            {resetEmailSent ? (
                <div className="reset-email-notification">
                    <p>Reset email sent to {email}. Check your inbox!</p>
                </div>
            ) : (
                <>
                    {resetError && <p className="error-message">{resetError}</p>}
                    {passwordResetSuccessful ? (
                        <>
                            <p>Password reset successful!</p>
                            {renderSetNewPasswordForm()}
                        </>
                    ) : (
                        <>
                            {renderResetPasswordForm()}
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default ForgotPasswordPage;