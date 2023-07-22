import React from 'react';

import GithubCorner from 'react-github-corner';
import { Link } from 'react-router-dom';

import './NavBar.scss'

export default class NavBar extends React.Component {
    navList () {
        const navs = ['home', 'projects'];
        return (
            navs.map((nav,index) => {
                return (
                    <Link to={`/${nav}`} key={index}>
                        <li>
                            <span className='linky'>{nav}
                            <span className='cover'>&nbsp;</span>
                            </span>
                            
                        </li>
                    </Link>
                );
            })
        );
    }
    render () {
        return (
            <nav>
                <GithubCorner 
                    href='https://github.com/allenmcao/allenmcao.github.io'
                    direction='right'
                    bannerColor='black'
                    size='50'
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
