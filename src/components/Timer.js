import React, { Component } from 'react';


 
class Timer extends Component {

    state =  {
        timeRemaining: 30
    };

    componentDidMount() {
        console.log("YOOOOOOOO")
        let seconds;
        switch(this.props.context.stage) {
            case "question":
                seconds=10;
                break;
            case "between":
                seconds=5;
                break;
            default:
                seconds=10; 
        }

        this.setState({timeRemaining: seconds}, ()=>{
            this.intervalID = setInterval(() => this.tick(), 1000);
        });     
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
        
    // }

    tick =  () => {
        if(this.state.timeRemaining===0) {
            clearInterval(this.intervalID);
            if(this.props.context.stage==="between" && this.props.context.questionNumber===this.props.context.questions.length) {
                this.props.context.actions.stageChange("end");
            }
            else if (this.props.context.stage==="between") {
                this.props.context.actions.stageChange("question")
            }
            else if (this.props.context.stage==="question") {
                this.props.context.actions.stageChange("between");
            }
        } else{
            this.setState({timeRemaining: this.state.timeRemaining-1});
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.timeRemaining}</h1>
            </div>
        );
    }
}


export default Timer;