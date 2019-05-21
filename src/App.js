import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { Consumer } from './components/Context';

function App() {
  return(
    <Consumer>
      {context=>{
        let page;
        switch(context.stage) {
          case "beginning":
            page=<div>
                  <h1>This is the begining</h1>
                </div>;
            break;
          case "question":
            page=<div>
                  <Timer context={context} />
                  <h1>This is a question</h1>
                </div>;
            break;
          case "between": 
            page=<div>
                  <Timer context={context} />
                  <h1>This is between questions</h1>
                </div>;
            break;
          case "end": 
            page=<div>
                  <h1>This is the end of the game</h1>
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
