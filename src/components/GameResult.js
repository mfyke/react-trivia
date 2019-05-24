import React from 'react';
import { Consumer } from './Context';
import { Button } from '@material-ui/core';

const GameResult = () => {
    return (
        <Consumer>
            {context=>{
                return (
                    <div>
                        <h1>Game Over!</h1>
                        <h1>{`You got ${context.correct} out of ${context.questionNumber} correct!`}</h1>
                        <Button variant="contained" color="primary" onClick={context.actions.restart}>Restart!</Button>
                    </div>
                );
            }}
        </Consumer>
    )
}

export default GameResult;