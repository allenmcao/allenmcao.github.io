'use strict';

// const React = require('react');
import React from 'react';
// const ReactRouter = require('react-router');
import ReactRouter from 'react-router'

// const config = require('./config');

// const Main = require('./components/main');
import Main from './components/main'
import Home from './components/home'
import NotFound from './components/not_found'
import { browserHistory, IndexRedirect, Router, Route, Link } from 'react-router'

export default (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRedirect to="/home" />
            <Route path='home' component={Home}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
);