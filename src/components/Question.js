import React from 'react';
import { Consumer } from './Context';

const Question = () => {
    return (
        <Consumer>
            {context=>{
                return (
                    <h1>{context.questions[context.questionNumber].question}</h1>
                );
            }}
        </Consumer>
        
    );
}

export default Question;