import React from 'react';

import Navigation from './navigation'
import AboutMe from './aboutme'
import Home from './home'

import ReactTransitionGroup from 'react-addons-transition-group'
import { styles } from './styles/main.scss'

export default class Main extends React.Component {
  render () {
    const { location } = this.props;
    return (
        <div className='main'>
            <ReactTransitionGroup>
                <Navigation key="n"/>
                <div className='content' key="c">
                    {React.cloneElement(this.props.children, {
                      key: location.pathname,
                    })}
                </div>
            </ReactTransitionGroup>
        </div>        
        );
  }
}