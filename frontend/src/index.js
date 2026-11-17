/* wa_ss24_primeflex/frontend/src/index.js */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/styles/index.css';
import App from './App';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import MoviesPage from './components/pages/MoviesPage';
import SeriesPage from './components/pages/SeriesPage';
import TrendsPage from './components/pages/TrendsPage';
import RatingPage from './components/pages/RatingPage';
import SearchPage from './components/pages/SearchPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import InstallationPage from './components/pages/InstallationPage';
import DocumentationPage from './components/pages/DocumentationPage';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/series" component={SeriesPage} />
            <Route path="/trends" component={TrendsPage} />
            <Route path="/rating" component={RatingPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/forgot-password" component={ForgotPasswordPage} />
            <Route path="/installation" component={InstallationPage} />
            <Route path="/documentation" component={DocumentationPage} />
        </Switch>
    </Router>
);

reportWebVitals();