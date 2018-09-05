'use strict';

// const React = require('react');
import React from 'react';

// const config = require('./config');

// const Main = require('./components/main');
import Main from './components/main'
import Home from './components/home'
import AboutMe from './components/aboutme'
import Work from './components/work'
import Education from './components/education'
import Skills from './components/skills'
import Projects from './components/projects'
import References from './components/references'
import NotFound from './components/not_found'
import { HashRouter, Switch, Redirect, Route, Link } from 'react-router-dom'

export default (
    <HashRouter>
        <Main />
    </HashRouter>
);