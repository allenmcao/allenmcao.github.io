import React from 'react';
import ReactDOM from 'react-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import ReactTransitionGroup from 'react-addons-transition-group'
import { styles } from './styles/home.scss'
import { TweenMax } from 'gsap'

import { Link } from 'react-router'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {mounted: false};
    }

    // getInitialState() {
    //     return { mounted: false };
    // }

    // componentDidMount() {
    //     this.setState({ mounted: true });
    //     // var elem = this.getDOMNode();
    //     // // Set the opacity of the element to 0
    //     // elem.style.opacity = 0;
    //     // window.requestAnimationFrame(function() {
    //     //     // Now set a transition on the opacity
    //     //     elem.style.transition = "width 2500ms ease-in";
    //     //     // and set the opacity to 1
    //     // });
    //     var myEl = ReactDOM.findDOMNode(this.refs.namee);
    //     // myEl.className = "name-load";
    // }

    componentWillAppear() {
        console.log("willEnter");
    }
    componentWillLeave() {
        var myEl = ReactDom.findDOMNode(this.refs.namee)
        console.log("FUCK");
        TweenMax.fromTo(".name", 6, {color: black}, {color: white})
    }
    render () {
        return (
            <div className='home'>
                
                <h2 ref="namee" className='name'>ALLEN CAO</h2>
                <div className='hrDiv' key="base">
                    <hr className='hr1' key="one"/>
                    <hr className='hr2' key="two"/>
                    <hr className='hr3' key="three"/>
                </div>
                <p>University of California, Berkeley</p>
            </div>
        );
    }
}
// <Link to='/aboutme' className='navWrapper'>PODSFJPSDOF</Link>