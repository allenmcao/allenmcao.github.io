export function getCurrentDimension(){
    return {
      	width: window.innerWidth,
      	height: window.innerHeight
    }
}

export function randomize(base, offset=0){
    return Math.random() * base + offset;
}