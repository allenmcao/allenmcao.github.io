import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import Expire from 'components/Expire'
import {BlackCircle, WhiteCircle, WhiteSplatter, BlackSplash} from './Splash'

import { getCurrentDimension, randomize } from 'utils/util';

const arrowLine = {
    initial: {width: 1},
    animate: {width: 100},
    hover: {width: 100, transition: {duration: 0.5, delay: 0}},
}

const arrowDiv = {
    initial: {marginLeft: 100, fontSize:'80px', opacity: 0},
    animate: {
        opacity: [0,1,1],
        fontSize: ['80px','100px','100px'], 
        marginLeft: 210, 
        marginTop: 30, 
        transition: { 
            delay: 2.25,
            duration: 6, 
            times: [0,0.001,1]
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
        console.log(splas);
        setSplashes(splas);
    }, [])

    const [arrowHover, setArrowHover] = useState(false)
    function handleMouseEnterArrow() {
        setArrowHover(true);
    }
    function handleMouseLeaveArrow() {
        setArrowHover(false);
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

                <motion.div className="absolute w-full h-full flex items-center justify-center  z-20">
                    <motion.div 
                            className="absolute font-[Libelsuit] font-bold rotate-[330deg]"
                            initial={{opacity: 0, fontSize:'80px', marginLeft: -50, marginTop:-30}}
                            animate={{opacity: [0,1,1],  fontSize: ['80px','100px','100px'], marginLeft: -200, marginTop: -50, transition:{ duration: 5, delay: 2.25, times: [0,0.1,1]}}}
                        >
                            GO
                    </motion.div>
                    <motion.button 
                        className="font-[UniSansThin] font-bold rotate-12 "
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={arrowDiv}
                        onMouseEnter={handleMouseEnterArrow}
                        onMouseLeave={handleMouseLeaveArrow}
                    >
                        <motion.span
                            className="relative top-[-9px] right-[-15px] align-middle rounded-full bg-black w-0 h-4 inline-block"
                            whileHover="hover"
                            variants={arrowLine}
                        >
                        </motion.span>
                        ➜
                    </motion.button>
                </motion.div>
        </motion.div>
    );
}

export default SplashAnimation;
