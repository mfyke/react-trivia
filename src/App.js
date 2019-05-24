import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { Consumer } from './components/Context';
import Question from './components/Question';
import QuestionResult from './components/QuestionResult';
import AnswerForm from './components/AnswerForm';
import Start from './components/Start';
import GameResult from './components/GameResult';

function App() {
  return(
    <Consumer>
      {context=>{
        let page;
        switch(context.stage) {
          case "beginning":
            page=<Start />;
            break;
          case "question":
            page=<div>
                  <Timer />
                  <Question />
                  <AnswerForm />
                </div>;
            break;
          case "between": 
            page=<div>
                  <Timer />
                  <QuestionResult />
                </div>;
            break;
          case "end": 
            page=<div>
                  <GameResult />
                </div>;
            break;
          default: 
            page=<div>
                  <h1>error with game stage state</h1>
                </div>
        }
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            {page}
          </div>
        );
      }}
    </Consumer>
    
  );
}

export default App;
