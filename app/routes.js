'use strict';

import React from 'react';

import Main from './components/main'
// import Home from './components/home'
// import AboutMe from './components/aboutme'
// import Work from './components/work'
// import Education from './components/education'
// import Skills from './components/skills'
// import Projects from './components/projects'
// import References from './components/references'
// import NotFound from './components/not_found'
import { HashRouter, Switch, Redirect, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import configureStore from './configureStore'
import createHistory from 'history/createBrowserHistory';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

export default (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>
);