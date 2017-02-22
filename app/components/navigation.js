import React from 'react';

import { Link } from 'react-router';
import { styles } from './styles/navigation.scss'

export default class Navigation extends React.Component {
  render () {
    return (
        <nav>
            <div className='navWrapper'>
                <ul>
                    <li><Link className='linky' to='home'>Home</Link></li>
                    <li><Link className='linky' to='aboutme'>About</Link></li>
                    <li><Link className='linky' to='work'>Work</Link></li>
                    <li><Link className='linky' to='education'>Education</Link></li>
                    <li><Link className='linky' to='skills'>Skills</Link></li>
                    <li><Link className='linky' to='projects'>Projects</Link></li>
                    <li><Link className='linky' to='references'>References</Link></li>
                </ul>
            </div>
        </nav>       
    );
  }
}