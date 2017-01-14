import React from 'react';

import { Link } from 'react-router';
import { styles } from './styles/navigation.scss'

export default class Navigation extends React.Component {
  render () {
    const linkstyle = {
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'none'
        }
    };
    return (
        <nav>
            <div className='navWrapper'>
                <ul>
                    <li><Link to='home' style={linkstyle}>Home</Link></li>
                    <li><Link to='aboutme' style={linkstyle}>About</Link></li>
                    <li><Link to='work' style={linkstyle}>Work</Link></li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>References</li>
                </ul>
            </div>
        </nav>       
    );
  }
}