import React from 'react';
import { connect } from 'react-redux';

import GithubCorner from 'react-github-corner';
import { Link } from 'react-router-dom';

import { style } from '../styles/navigation.scss'

export class Navigation extends React.Component {
    navList () {
        const navs = ['home', 'aboutme', 'work', 'education', 'skills', 'projects', 'references'];
        return (
            navs.map((nav,index) => {
                return (
                    <Link to={`/${nav}`} key={index}>
                        <li>
                            <span className='linky'>{nav}</span>
                            <span className='cover'>&nbsp;</span>
                        </li>
                        <li>
                            <span className={this.props.pathname == `/${nav}` ? 'matched' : 'divider'}>&nbsp;</span>
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

export function mapDispatchToProps(dispatch) {
    return {
        selectPath: evt => dispatch(selectPath(evt.target.value))
    }
}

const mapStateToProps = (state) => {
    return {
        pathname: state.get("route").get("location").get("pathname"),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)