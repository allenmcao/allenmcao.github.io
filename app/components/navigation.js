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
            <div className='nameWrapper'>
                <div className='name1'>ALLEN</div>
                <div className='name2'>CAO</div>
            </div>
            <div className='navWrapper'>
                <ul>
                    <hr id="1"/>
                    <li><Link className='linky' to='home'>Home</Link></li>
                    <hr id="2"/>
                    <li><Link className='linky' to='aboutme'>About</Link></li>
                    <hr id="3"/>
                    <li><Link className='linky' to='work'>Work</Link></li>
                    <hr id="4"/>
                    <li><Link className='linky' to='education'>Education</Link></li>
                    <hr id="5"/>
                    <li><Link className='linky' to='skills'>Skills</Link></li>
                    <hr id="6"/>
                    <li><Link className='linky' to='projects'>Projects</Link></li>
                    <hr id="7"/>
                    <li><Link className='linky' to='references'>References</Link></li>
                    <hr id="8"/>
                </ul>
            </div>
        </nav>       
    );
  }
}