// wa_ss24_primeflex/frontend/src/App.js
import React from 'react';
import './components/styles/App.css';
import { Route, Switch } from 'react-router-dom';
import HomeVideo from './components/homepage/HomeVideo.js';
import SignUpPage from './components/pages/SignUpPage';
import AdminPage from './components/pages/AdminPage';

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomeVideo} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/signin" render={() => <div>Sign In Page</div>} />
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </div>
    );
}

export default App;