import React from 'react';

import Navigation from './navigation'
import AboutMe from './aboutme'
import Home from './home'

import { styles } from './styles/main.scss'

export default class Main extends React.Component {
  render () {
    return (
        <div className='main'>
            <Navigation />
            <div className='content'>
                {this.props.children}
            </div>
        </div>        
        );
  }
}