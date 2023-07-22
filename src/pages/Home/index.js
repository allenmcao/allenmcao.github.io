import React from 'react';
import {motion} from 'framer-motion';

import 'styles/home.scss'
import SplashAnimation from 'components/SplashAnimation';

export default class Home extends React.Component {

    render () {
        return (
            <div className='home'>
                <SplashAnimation />

                {/* <div className='hrDiv' key="base">
                    <hr className='hr1' key="one"/>
                    <hr className='hr2' key="two"/>
                    <hr className='hr3' key="three"/>
                </div> */}
                

                {/* <div className="quoteWrapper"
                >
                    "If debugging is the process of removing software bugs,
                    <br/>
                    then programming must be the process of putting them in.
                    <br/>
                    -Edsger Dijkstra
                </div> */}

                {/* <p className="berk">University of California, Berkeley</p> */}
                
            </div>
        );
    }
}