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
                delay: 0.1 + delay,
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
    }
};

export const whiteSplatterAnim = (delay, size) => {
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
    }
};