import React from 'react';

import GithubCorner from 'react-github-corner';
import { Link } from 'react-router-dom';
import { styles } from './styles/navigation.scss'

export default class Navigation extends React.Component {
    navList () {
        const navs = ['home', 'aboutme', 'work', 'education', 'skills', 'projects', 'references']
        return navs.map(nav => 
                            <Link to={'/' + nav} style={{ textDecoration: 'none' }}>
                                <li>
                                    <span className='linky'>{nav}</span>
                                    <span className='cover'>&nbsp;</span>
                                </li>
                                <li>
                                    <span className='divider'>&nbsp;</span>
                                </li>
                            </Link>)
    }
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
                        {this.navList()}
                    </ul>
                </div>
            </nav>       
        );
    }
}