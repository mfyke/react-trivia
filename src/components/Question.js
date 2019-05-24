import React from 'react';
import { Consumer } from './Context';

const Question = () => {
    return (
        <Consumer>
            {context=>{
                return (
                    <div>
                        <h1 className="question">{context.questions[context.questionNumber].question}</h1>
                    </div>
                );
            }}
        </Consumer>
        
    );
}

export default Question;