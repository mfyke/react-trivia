import React, { Component } from 'react';
const TriviaGameContext = React.createContext();

export class Provider extends Component {
    state = {
        questionNumber: 0,
        questions: [{
            question: "Which character said: If I was dead you could bang me all you want. I mean, who cares? A dead body is like a piece of trash. I mean, shove as much shit in there as you want. Fill me up with cream, make a stew out of my ass. What's the big deal? Bang me, eat me, grind me up into little pieces, throw me in the river. Who gives a shit? You're dead, you're dead! Oh shit! Is my mic on?",
            answers: ["Charlie", "Mac", "Frank", "Dennis"],
            correctAnswer: 2,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-danny-devito.jpg"
          }, {
            question: "Yeah! Okay! This is great because earlier, you were implying that I was racist because you thought that I was implying that all black people are related, and then it turns out that you people actually are!",
            answers: ["Mac", "Frank", "Dee", "Cricket"],
            correctAnswer: 0,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-rob-mcelhenney.jpg"
          }],
        stage: "question",
        correct: 0,
        timeRemaining: 30
    }
    
    handleStageChange = (newStage, nextQuestion) => {
        if(nextQuestion) {
            this.setState({questionNumber: this.state.questionNumber+1, stage: newStage});
        } else {
            this.setState({stage: newStage});
        }
        
    }

    handleQuestionAnswer = () => {
        this.setState({correct: this.state.correct+1});
    }

    tick =  () => {
        if(this.state.timeRemaining===1) {
            // clearInterval(this.intervalID);
            if(this.state.stage==="between" && this.state.questionNumber===this.state.questions.length) {
                this.setState({timeRemaining: 30}, () => {
                    this.handleStageChange("end");
                });         
            }
            else if (this.state.stage==="between") {
                this.setState({timeRemaining: 30}, ()=>{
                    this.handleStageChange("question");
                    // this.intervalID = setInterval(() => this.tick(), 1000);
                });    
            }
            else if (this.state.stage==="question") {
                this.setState({timeRemaining: 5}, ()=> {
                    this.handleStageChange("between", true);
                    // this.intervalID = setInterval(() => this.tick(), 1000);
                });                
            }
        } else{
            this.setState({timeRemaining: this.state.timeRemaining-1});
        }
    }

    render() {
        return (
            <TriviaGameContext.Provider value= {{
                questionNumber: this.state.questionNumber,
                questions: this.state.questions,
                stage: this.state.stage,
                correct: this.state.correct,
                timeRemaining: this.state.timeRemaining,
                actions: {
                    stageChange: this.handleStageChange,
                    questionAnswer: this.handleQuestionAnswer,
                    tick: this.tick
                }
            }}>
                {this.props.children}
            </TriviaGameContext.Provider>
        );
    }
}
export const Context = TriviaGameContext;
export const Consumer = TriviaGameContext.Consumer;
