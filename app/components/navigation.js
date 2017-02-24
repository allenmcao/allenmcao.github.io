import React from 'react';

import GithubCorner from 'react-github-corner';
import { Link } from 'react-router';
import { styles } from './styles/navigation.scss'

export default class Navigation extends React.Component {
  render () {
    return (
        <nav>
            <GithubCorner 
                href='https://github.com/allenmcao/allenmcao.github.io'
                direction='left'
                bannerColor='black'
                />
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