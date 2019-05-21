import React, { Component } from 'react';


 
class Timer extends Component {

    state =  {
        timeRemaining: 10
    };

    componentDidMount() {
        console.log("YOOOOOOOO");
        this.intervalID = setInterval(() => this.tick(), 1000); 
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);

    }

    tick =  () => {
        if(this.state.timeRemaining===1) {
            clearInterval(this.intervalID);
            if(this.props.context.stage==="between" && this.props.context.questionNumber===this.props.context.questions.length) {
                this.setState({timeRemaining: 10}, () => {
                    this.props.context.actions.stageChange("end");
                });         
            }
            else if (this.props.context.stage==="between") {
                this.setState({timeRemaining: 10}, ()=>{
                    this.props.context.actions.stageChange("question");
                    this.intervalID = setInterval(() => this.tick(), 1000);
                });    
            }
            else if (this.props.context.stage==="question") {
                this.setState({timeRemaining: 5}, ()=> {
                    this.props.context.actions.stageChange("between", true);
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
                {this.props.context.stage==="question"? <h1>{this.state.timeRemaining}</h1>: null}
            </div>
        );
    }
}

export default Timer;