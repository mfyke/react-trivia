import React from 'react';
import { Consumer } from './Context';
import { Button } from '@material-ui/core';

const Start = () => {
    return (
        <Consumer>
            {context=>{
                return (
                    <div>
                        <h1>Welcome to Always Sunny Quote Trivia!</h1>
                        <h3>You will have 30 seconds per question. Press the start button below to begin the game.</h3>
                        <Button variant="contained" className="startButton" color="primary" onClick={context.actions.start}>Start!</Button>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default Start;