import React, { Component } from 'react';
const TriviaGameContext = React.createContext();

export class Provider extends Component {
    state = {
        questionNumber: 0,
        questions: [{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        stage: "question",
        correct: 0
    }
    
    handleQuestionIncrease = () => {
        this.setState({questionNumber: this.state.questionNumber+1});
    }

    handleStageChange = (newStage) => {
        this.setState({stage: newStage});
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

// import React, { Component } from 'react';

// const ScoreBoardContext = React.createContext();

// export class Provider extends Component {

//     state = {
//         players: [
//           {
//             name: "Guil",
//             score: 0,
//             id: 1
//           },
//           {
//             name: "Treasure",
//             score: 0,
//             id: 2
//           },
//           {
//             name: "Ashley",
//             score: 0,
//             id: 3
//           },
//           {
//             name: "James",
//             score: 0,
//             id: 4
//           }
//         ]
//     };

//     prevPlayerId = 4;

//     handleScoreChange = (index, delta) => {
//       this.setState( prevState => ({
//         score: prevState.players[index].score += delta
//       }));
//     }
  
//     handleAddPlayer = (name) => {
//       this.setState( prevState => {
//         return {
//           players: [
//             ...prevState.players,
//             {
//               name,
//               score: 0,
//               id: this.prevPlayerId += 1
//             }
//           ]
//         };
//       });
//     }
  
//     handleRemovePlayer = (id) => {
//       this.setState( prevState => {
//         return {
//           players: prevState.players.filter(p => p.id !== id)
//         };
//       });
//     }

//     render() {
//         return(
//             <ScoreBoardContext.Provider value={{
//                 players: this.state.players,
//                 actions: {
//                   changeScore: this.handleScoreChange,
//                   removePlayer: this.handleRemovePlayer,
//                   addPlayer: this.handleAddPlayer
//                 }
//             }}>
//                 {this.props.children}
//             </ScoreBoardContext.Provider>
//         );
//     }
// }
// export const Consumer = ScoreBoardContext.Consumer;

