import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { styles } from './styles/home.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mounted: false};
    }

    getInitialState() {
        return { mounted: false };
    }

    componentDidMount() {
        this.setState({ mounted: true });
        // var elem = this.getDOMNode();
        // // Set the opacity of the element to 0
        // elem.style.opacity = 0;
        // window.requestAnimationFrame(function() {
        //     // Now set a transition on the opacity
        //     elem.style.transition = "width 2500ms ease-in";
        //     // and set the opacity to 1
        // });
    }
    render () {
    let horizs = null;
    let blah = null
    if (this.state.mounted) {
        horizs = (
        <div>
            <hr className='hr1' key="one"/>
            <hr className='hr2' key="two"/>
            <hr className='hr3' key="three"/>
        </div>);
    }
    return (
        <div className='home'>
            <ReactCSSTransitionGroup
                    transitionName="rctg-name"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                    >
                {this.state.mounted ? null : <h2 className='name' key="blah">ALLEN CAO</h2> }
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                transitionName="hrs"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                >
                {horizs}
            </ReactCSSTransitionGroup>
            <p>University of California, Berkeley</p>
        </div>
    );
    }
}