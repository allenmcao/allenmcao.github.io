import React from 'react';

import { styles } from './styles/navigation.scss'

export default class Navigation extends React.Component {
  render () {
    return (
        <nav>
            <div className='navWrapper'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
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