import React, { Component } from 'react';
const TriviaGameContext = React.createContext();

export class Provider extends Component {
    state = {
        questionNumber: 0,
        questions: [{},{}],
        stage: "question",
        correct: 0
    }
    
    handleStageChange = (newStage, nextQuestion) => {
        if(nextQuestion) {
            this.setState({questionNumber: this.state.questionNumber+1, stage: newStage});
        } else {
            this.setState({stage: newStage});
        }
        
    }

    handleCorrectQuestion = () => {
        this.setState({correct: this.state.correct+1});
    }

    render() {
        return (
            <TriviaGameContext.Provider value= {{
                questionNumber: this.state.questionNumber,
                questions: this.state.questions,
                stage: this.state.stage,
                correct: this.state.correct,
                actions: {
                    questionIncrease: this.handleQuestionIncrease,
                    stageChange: this.handleStageChange,
                    correctQuestion: this.handleCorrectQuestion
                }
            }}>
                {this.props.children}
            </TriviaGameContext.Provider>
        );
    }
}

export const Consumer = TriviaGameContext.Consumer;
