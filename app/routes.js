'use strict';

// const React = require('react');
import React from 'react';
// const ReactRouter = require('react-router');
import ReactRouter from 'react-router'

// const config = require('./config');

// const Main = require('./components/main');
import Main from './components/main'
import NotFound from './components/not_found'
import { browserHistory, Router, Route, Link } from 'react-router'

export default (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
);