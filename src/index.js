import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginSignUp from './LoginSignup'
import Secret from './Secret'

require('dotenv').config()

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/is-authorised">Secret</Link>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={LoginSignUp} />
            <Route exact path="/is-authorised" component={Secret} />
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
