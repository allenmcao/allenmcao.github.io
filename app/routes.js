'use strict';

// const React = require('react');
import React from 'react';

// const config = require('./config');

// const Main = require('./components/main');
import Main from './components/main'
import Home from './components/home'
import AboutMe from './components/aboutme'
import Work from './components/work'
import Projects from './components/Projects'
import NotFound from './components/not_found'
import { hashHistory, IndexRedirect, Router, Route, Link } from 'react-router'

export default (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRedirect from='/' to="/home" />
            <Route path='home' component={Home}/>
            <Route path='aboutme' component={AboutMe}/>
            <Route path='work' component={Work}/>
            <Route path='projects' component={Projects}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
);