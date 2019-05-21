import React, { Component } from 'react';
import { Context } from './Context';


 
class Timer extends Component {

    state =  {
        timeRemaining: 30
    };

    componentDidMount() {
        console.log("YOOOOOOOO");
        this.intervalID = setInterval(() => this.tick(), 1000); 
    }

    componentWillUnmount() {
        console.log("unmounting");
        clearInterval(this.intervalID);
    }

    tick =  () => {
        if(this.state.timeRemaining===1) {
            clearInterval(this.intervalID);
            if(this.context.stage==="between" && this.context.questionNumber===this.context.questions.length) {
                this.setState({timeRemaining: 30}, () => {
                    this.context.actions.stageChange("end");
                });         
            }
            else if (this.context.stage==="between") {
                this.setState({timeRemaining: 30}, ()=>{
                    this.context.actions.stageChange("question");
                    this.intervalID = setInterval(() => this.tick(), 1000);
                });    
            }
            else if (this.context.stage==="question") {
                this.setState({timeRemaining: 5}, ()=> {
                    this.context.actions.stageChange("between", true);
                    this.intervalID = setInterval(() => this.tick(), 1000);
                });                
            }
        } else{
            this.setState({timeRemaining: this.state.timeRemaining-1});
        }
    }

    render() {
        return (
            <div>
                {this.context.stage==="question"? <h1>{this.state.timeRemaining}</h1>: null}
            </div>
        );
    }
}

Timer.contextType = Context;

export default Timer;