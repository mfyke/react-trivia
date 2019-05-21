import React from 'react';
import { Consumer } from './Context';

const QuestionResult = () => {
    return (
        <Consumer>
            {context=>{
                const questionNumber = context.questionNumber-1;
                const answerNumber = context.questions[questionNumber].correctAnswer;
                return (
                    <div>
                        <h1>{`The correct answer is ${context.questions[questionNumber].answers[answerNumber]}`}</h1>
                        <img alt="answer" src={context.questions[questionNumber].image} />
                    </div>
                );
            }}
        </Consumer>        
    );
}

export default QuestionResult;