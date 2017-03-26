import React from 'react';
import ReactDOM from 'react-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Link } from 'react-router'

import Typist from 'react-typist';

import { styles } from './styles/home.scss'

export default class Home extends React.Component {
    delayGen(mean, std, { line, lineIdx, charIdx, defDelayGenerator }) {
        if (lineIdx === 0 && charIdx === line.length - 1) {
          return 500;
        }
        if (lineIdx === 1 && charIdx === line.length - 1) {
          return 1250;
        }
        return defDelayGenerator(mean + 25);
    }

    render () {
        return (
            <div className='home'>

                <div className='hrDiv' key="base">
                    <hr className='hr1' key="one"/>
                    <hr className='hr2' key="two"/>
                    <hr className='hr3' key="three"/>
                </div>

                <Typist 
                    className="quoteWrapper" 
                    startDelay={2000} 
                    avgTypingDelay={50} 
                    delayGenerator={this.delayGen}
                    // cursor={{ hideWhenDone: true }}
                >
                    "If debugging is the process of removing software bugs,
                    <br/>
                    then programming must be the process of putting them in.
                    <br/>
                    -Edsger Dijkstra
                </Typist>

                <p className="berk">University of California, Berkeley</p>
                
            </div>
        );
    }
}