import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import GithubCorner from 'react-github-corner';
import { Link } from 'react-router-dom';

import './NavBar.scss'

const nameAnim = {
    initial: {
        x: -35,
        y: 35,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: [0,1,1],
        transition: {
            duration: 1.5,
            times: [0,0.5,1]
        }
    },
}

const tabAnim = {
    initial: {
        x: -15,
        y: 25,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: [0,1,1],
        transition: {
            duration: 1,
            times: [0,0.5,1]
        }
    },
}


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
            <motion.nav>
                <GithubCorner 
                    href='https://github.com/allenmcao/allenmcao.github.io'
                    direction='right'
                    bannerColor='black'
                    size='50'
                    />
                <motion.div className='nameWrapper' initial="initial" animate="animate" variants={nameAnim}>
                    <div className='name1'>ALLEN</div>
                    <div className='name2'>CAO</div>
                </motion.div>
                <motion.div className='navWrapper' initial="initial" animate="animate" variants={tabAnim}>
                    <ul>
                        {this.navList()}
                    </ul>
                </motion.div>
            </motion.nav>
        );
    }
}
