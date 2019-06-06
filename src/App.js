import React from 'react';
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
              <img src="https://external-preview.redd.it/vamnazEWjPlQWM3jZyVP6PbL_Ql93UCSfvb25Czrt4w.png?auto=webp&s=505cff58bedea30329c609c6cc1f3fe5e8ec4610" className="App-logo" alt="logo" />
            </header>
            {page}
          </div>
        );
      }}
    </Consumer>
    
  );
}

export default App;
