import React from 'react';

import 'styles/home.scss'

export default class Projects extends React.Component {
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

                <div className="quoteWrapper"
                >
                    PROJECTS
                </div>

                <p className="berk">projecties</p>
                
            </div>
        );
    }
}