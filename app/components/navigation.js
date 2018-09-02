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
                    <li>
                        <Link className='linky' to='home'>Home</Link>
                        <span>&nbsp;</span>
                    </li>
                    <li>
                        <Link className='linky' to='aboutme'>About</Link>
                        <span>&nbsp;</span>
                    </li>
                    <li>
                        <Link className='linky' to='work'>Work</Link>
                        <span>&nbsp;</span>
                    </li>
                    <li>
                        <Link className='linky' to='education'>Education</Link>
                        <span>&nbsp;</span>
                    </li>
                    <li>
                        <Link className='linky' to='skills'>Skills</Link>
                        <span>&nbsp;</span>
                    </li>
                    <li>
                        <Link className='linky' to='projects'>Projects</Link>
                        <span>&nbsp;</span>
                    </li>
                    <li>
                        <Link className='linky' to='references'>References</Link>
                        <span>&nbsp;</span>
                    </li>
                </ul>
            </div>
        </nav>       
    );
  }
}