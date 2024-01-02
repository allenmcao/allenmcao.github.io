import React from 'react';
import {motion} from 'framer-motion';

import 'styles/home.scss'

const tabAnim = {
    initial: {
        x: 15,
        y: 25,
    },
    animate: {
        x: 0,
        y: 0,
        transition: {
            duration: 1,
        }
    },
}

export default class Home extends React.Component {

    render () {
        return (
            <motion.div className="relative">
                <motion.div className="text-[120px] font-[UniSans]">
                    <motion.div initial="initial" animate="animate" variants={tabAnim}>
                        WELCOME
                    </motion.div>
                    <motion.div initial="initial" animate="animate" variants={tabAnim}>
                        TO
                    </motion.div>
                    <motion.div className="text-[160px] font-[UniSans]" initial="initial" animate="animate" variants={tabAnim}>
                        ME
                    </motion.div>
                    <motion.div initial="initial" animate="animate" variants={tabAnim}>
                        
                    </motion.div>
                </motion.div>

                {/* <div className='hrDiv' key="base">
                    <hr className='hr1' key="one"/>
                    <hr className='hr2' key="two"/>
                    <hr className='hr3' key="three"/>
                </div> */}
                

                {/* <div className="quoteWrapper">
                    "If debugging is the process of removing software bugs,
                    <br/>
                    then programming must be the process of putting them in.
                    <br/>
                    -Edsger Dijkstra
                </div> */}

                {/* <p className="berk">University of California, Berkeley</p> */}
                
            </motion.div>
        );
    }
}