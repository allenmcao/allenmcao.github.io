import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import blackSplatter2 from 'assets/blacksplatter2.png'
import blackSplatter2reverse from 'assets/blacksplatter2reverse.png'
import whiteSplatter2 from 'assets/whitesplatter2.png'
import whiteSplatter3 from 'assets/whitesplatter3.png'
import whiteSplatter4 from 'assets/whitesplatter4.png'
import { getCurrentDimension, randomize } from 'utils/util';


export const blackCircleAnim = (delay, size) => {
    return {
        initial: {
            height: 100 * size,
            width: 100 * size,
            opacity: 0,
        },
        animate: {
            height: 610 * size,
            width: 610 * size,
            opacity: [0, 1, 1],
            transition: {
            times: [0, 0.5, 1],
            delay: delay,
            duration: 0.3,
            },
        },
    }
};

export const blackSplatterAnim = (delay, size) => {
    return {
        initial: {
            height: 200 * size,
            width: 200 * size,
            opacity: 0,
        },
        animate: {
            height: 1500 * size,
            width: 1500 * size,
            opacity: [0, 1, 1],
            transition: {
                times: [0, 0.5, 1],
                delay: delay,
                duration: 0.5,
                ease: [0, 0.85, 0.95, 1]
                
            },
        },
    }
};

export const whiteCircleAnim = (delay, size) => {
    return {
        initial: {
            height: 0,
            width: 0,
            opacity: 0,
        },
        animate: {
            height: 610 * size,
            width: 610 * size,
            opacity: [0, 1, 1],
            transition: {
                times: [0, 0.5, 1],
                delay: delay,
                duration: 3,
                ease: [0.1, 1, 0.1, 1]
            },
        },
        exit: {
            opacity: [0,0,0],
            transition: {
                times: [0,0.01,1]
            }
        }
    }
};

export const whiteSplatterAnim = (delay, size, vmax) => {
    return {
        initial: {
            height: 0,
            width: 0,
            opacity: 0,
        },
        animate: {
            height: 2.3 * size,
            width: 2.3 * size,
            opacity: [0, 1, 1],
            transition: {
                times: [0, 0.5, 1],
                delay: delay,
                duration: 5,
                ease: [0.1, 1, 0.1, 1]
            },
        },
        exit: {
            height: 2.2 * vmax,
            width: 2.2 * vmax,
            transition: {
                duration: 3,
                ease: [0.1, 1, 0.1, 1]
            }
        }
    }
};

export const BlackCircle = ({k, delay, size}) => {
    return (
        <motion.div className='absolute w-full bg-black rounded-full'
            initial="initial"
            animate="animate"
            variants={blackCircleAnim(delay, size)}
            key={k}
        />
    )
}

export const BlackSplatter = ({delay, size}) => {
    const rotateAngle = Math.round(randomize(360));
    return (
        <motion.img className="absolute w-full"
            style={{transform: "rotate(" + rotateAngle + "deg)"}}
            initial="initial"
            animate="animate"
            variants={blackSplatterAnim(delay, size)}
            src={blackSplatter2}>
        </motion.img>
    )
}

export const WhiteCircle = ({k, delay, size}) => {
    return (
        <motion.div className='absolute rounded-full bg-white'
            initial="initial"
            animate="animate"
            exit="exit"
            variants={whiteCircleAnim(delay, size)}
            key={k}
        />
    )
}

export const WhiteSplatter = ({delay, size, vmax}) => {
    const [rotateAngle, setRotateAngle] = useState(Math.random() * 360);
    useEffect(() => {
        setRotateAngle(Math.random() * 360);
        return () => {};
    }, [])
    
    return (
        <>
            <motion.img className="absolute max-w-max"
                style={{boxShadow: "0 0 0 9999px black", transform: "rotate(" + rotateAngle + "deg)"}}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={whiteSplatterAnim(delay, size, vmax)}
                src={whiteSplatter3}
                >
            </motion.img>
            <motion.img className="absolute max-w-max"
                style={{boxShadow: "0 0 0 9999px black", transform: "rotate(" + (rotateAngle + 180) + "deg)"}}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={whiteSplatterAnim(delay, size, vmax)}
                src={whiteSplatter3}
                >
            </motion.img>
        </>
    )
}



export const BlackSplash = ({k, mr, mt, delay, size}) => {

    return (
        <motion.div className="absolute w-[1000px] h-[1000px] flex items-center justify-center"
            style={{right: mr, top: mt }}
        >
            <BlackCircle delay={delay} size={size} key={k} />
            <BlackSplatter delay={delay} size={size} />
            {/* <BlackSplatter delay={delay} size={size} /> */}
        </motion.div>
    );
}
