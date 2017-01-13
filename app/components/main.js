import React from 'react';

import Header from './header'
import AboutMe from './aboutme'

export default class Main extends React.Component {
  render () {
    return (
        <div>
            <Header />
            <p>Allen Cao</p>
            <AboutMe />
        </div>        
        );
  }
}