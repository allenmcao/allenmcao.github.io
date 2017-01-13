// import React from 'react';
// import {render} from 'react-dom';

// class App extends React.Component {
//   render () {
//     return <p> Hello React!</p>;
//   }
// }

// render(<App/>, document.getElementById('app'));

'use strict';

// const ReactDOM = require('react-dom'); REMOVE THIS
import ReactDOM from 'react-dom';
// const routes = require('./routes');
import routes from './routes';

ReactDOM.render(routes, document.getElementById('app'));