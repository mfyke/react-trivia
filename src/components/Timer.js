import React, { Component } from 'react';
import { Context } from './Context';


 
class Timer extends Component {

    componentDidMount() {
        console.log("YOOOOOOOO");
        this.intervalID = setInterval(() => this.context.actions.tick(), 1000); 
    }

    componentWillUnmount() {
        console.log("unmounting");
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div>
                {this.context.stage==="question"? <h1>{this.context.timeRemaining}</h1>: null}
            </div>
        );
    }
}

Timer.contextType = Context;

export default Timer;