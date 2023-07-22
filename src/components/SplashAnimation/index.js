import React, {useState, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';

import Expire from 'components/Expire'
import {BlackCircle, WhiteCircle, WhiteSplatter, BlackSplash} from './Splash'

import { getCurrentDimension, randomize } from 'utils/util';

const arrowLine = {
    initial: {width: 70},
    animate: {width: 70},
    hover: {width: 100},
}

const arrowDiv = {
    initial: {marginLeft: -30, marginTop: -60, opacity: 0},
    animate: {
        opacity: [0,1,1],
        marginLeft: 20, 
        marginTop: -55,
        transition: { 
            duration: 5, 
            delay: 2.25,
            times: [0,0.1,1]
        }
    },
}

const parentVariant = {
    transition: {
        staggerChildren: 1
    }
}

const SplashAnimation = () => {
    const [splashes, setSplashes] = useState([]);
    const {width, height} = getCurrentDimension();
    const vmax = Math.max(width, height);
    useEffect(() => {
        let splas = []
        let w = -400;
        while (w < width + 300) {
            let h = -500;
            while (h < height) {
                let d = Math.round(randomize(2))/1.5 + randomize(0.2) + 0.2;
                let s = (d/1.4) * 0.3 + 0.3;

                splas.push(
                    <BlackSplash 
                        className="overflow-hidden" 
                        key={w.toString() + h.toString()} mr={w + randomize(200)} 
                        mt={h + randomize(200)}
                        delay={d}
                        size={s}
                    />
                )
                h += 280;
            }
            w += 280;
        }
        setSplashes(splas);
    }, [])

    const controls = useAnimation();
    function handleMouseEnterControls() {
        controls.start("hover");
      }
    
      function handleMouseLeaveControls() {
        controls.start("initial");
      }

    return (
        <motion.div  className="absolute w-full h-full overflow-hidden " initial="initial" animate="animate" variants={parentVariant}>

                <motion.div  className="absolute inset-0 flex items-center justify-center bg-white">
                    {splashes}
                    <BlackCircle delay={1.6} size={vmax} key="fill" />
                </motion.div>
                <motion.div className="absolute inset-0 flex items-center justify-center z-10">
                    <WhiteCircle delay={2.15} size={1.08} />
                </motion.div>
                <motion.div  className="absolute inset-0 flex items-center justify-center">
                    <WhiteSplatter delay={2.25} size={400} />
                </motion.div>

                <motion.div className="absolute w-full h-full rotate-12  z-20">
                    <motion.div 
                            className="absolute inset-x-1/2 inset-y-1/2 font-[Libelsuit] font-bold rotate-[330deg]"
                            initial={{opacity: 0, fontSize:'90px', marginLeft: -80, marginTop:-60}}
                            animate={{opacity: [0,1,1],  fontSize: ['90px','100px','100px'], marginLeft: -160, marginTop: -100, transition:{ duration: 4, delay: 2.25, times: [0,0.1,1]}}}
                        >
                            GO
                    </motion.div>
                    <motion.button
                        className="text-[100px] align-middle relative font-[UniSansThin]  font-bold inline inset-x-1/2 inset-y-1/2"
                        initial="initial"
                        animate="animate"
                        variants={arrowDiv}
                        onMouseEnter={handleMouseEnterControls}
                        onMouseLeave={handleMouseLeaveControls}
                    >
                        <motion.span
                            className="top-[-9px] right-[-70px] relative align-middle rounded-full bg-black h-[18px] w-[70px] inline-block"
                            animate={controls}
                            variants={arrowLine}
                        >
                        </motion.span>
                        <span className="relative vertical-align">
                        ➜
                        </span>
                    </motion.button>
                </motion.div>
        </motion.div>
    );
}

export default SplashAnimation;
