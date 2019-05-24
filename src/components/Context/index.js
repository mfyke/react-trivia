import React, { Component } from 'react';
const TriviaGameContext = React.createContext();

export class Provider extends Component {
    state = {
        questionNumber: 0,
        questions: [{
            question: "Which character said: If I was dead you could bang me all you want. I mean, who cares? A dead body is like a piece of trash. I mean, shove as much shit in there as you want. Fill me up with cream, make a stew out of my ass. What's the big deal? Bang me, eat me, grind me up into little pieces, throw me in the river. Who gives a shit? You're dead, you're dead! Oh shit! Is my mic on?",
            answers: ["Charlie", "Mac", "Frank", "Dennis"],
            correctAnswer: 2,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-danny-devito.jpg"
          }, {
            question: "Yeah! Okay! This is great because earlier, you were implying that I was racist because you thought that I was implying that all black people are related, and then it turns out that you people actually are!",
            answers: ["Mac", "Frank", "Dee", "Cricket"],
            correctAnswer: 0,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-rob-mcelhenney.jpg"
          }, {
            question: "Which character said: That's bullshit, 'cause I'm a better smasher than you guys! I should be on the head of the smashing team! You wanna have a smash-off?",
            answers: ["Artemis", "Doyle McPoyle", "Mac", "Dee"],
            correctAnswer: 2,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-rob-mcelhenney.jpg"
          }, {
            question: "Which character said: Oh not too much, Charlie is using you to prove that he's not racist, and then he asked me out on a date?",
            answers: ["Dee", "Ruby Taft", "The Waitress", "Artemis"],
            correctAnswer: 2,
            image: "https://d1o51r9qdgnnlz.cloudfront.net/static_image/d93b4f7a-4b7f-4a11-82f3-4041a23c156e/static.jpg"
          }, {
            question: "Which character said: Hello. Who is this? Who?... Who is...? I don't know that name. Who? Who? Oh, oh, Waitress. Why didn't you just say that?",
            answers: ["Dee", "Frank", "Charlie", "Dennis"],
            correctAnswer: 3,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-glenn-howerton.jpg"
          }, {
            question: "Which character said: Because Dennis is a bastard man!",
            answers: ["Dennis", "Dee", "Charlie", "Mac"],
            correctAnswer: 0,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-glenn-howerton.jpg"
          }, {
            question: "Which character said: Did you fuck my mom, Santa Claus? Did you fuck my mom? Did you fuck her? DID YOU FUCK MY FUCKING MOM? DID YOU FUCK MY MOM, SANTA? AAAAH!",
            answers: ["'Da Maniac", "Charlie", "Mac", "Dennis"],
            correctAnswer: 1,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-charlie-day.jpg"
          }, {
            question: "Which character said: Hey, did he send you any dick pics? 'Cause it could be a mess down there.",
            answers: ["Dee", "Artemis", "Mac", "The Waitress"],
            correctAnswer: 1,
            image: "http://i1.sndcdn.com/artworks-000225331003-evp1yy-original.jpg"
          }, {
            question: "Which character said: Mm. I have contained my rage for as long as possible, but I shall unleash my fury upon you like the crashing of a thousand waves! Begone, vile man! Begone from me! A starter car? This car is a finisher car! A transporter of gods! The golden god! I am untethered, and my rage knows no bounds!",
            answers: ["Dee", "Frank", "Cricket", "Dennis"],
            correctAnswer: 3,
            image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-glenn-howerton.jpg"
          }, {
            question: "Which character said: Hey do you guys mind if I go into the bathroom and smoke some PCP?",
            answers: ["Mac", "Cricket", "Charlie", "Dennis"],
            correctAnswer: 1,
            image: "https://www.itsalways.com/wp-content/uploads/2017/07/Rickety-Cricket.jpg"
          }],
        stage: "beginning",
        correct: 0,
        timeRemaining: 30,
        questionCorrect: false
    }

    handleStart = () => {
        this.setState({stage: "question"});
    }

    handleQuestionAnswer = (choice) => {
        if(parseInt(choice)===this.state.questions[this.state.questionNumber].correctAnswer) {
            this.setState({correct: this.state.correct+1, stage: "between", questionNumber: this.state.questionNumber+1, timeRemaining: 5, questionCorrect: true});
        } else {
            this.setState({stage: "between", questionNumber: this.state.questionNumber+1, timeRemaining: 5, questionCorrect: false});
        }
    }

    handleRestart = () => {
        this.setState({questionNumber: 0, correct: 0, stage:"question"});
    }

    tick =  () => {
        if(this.state.timeRemaining===1) {
            if(this.state.stage==="between" && this.state.questionNumber===this.state.questions.length) {
                this.setState({timeRemaining: 30, stage: "end", questionCorrect: false});         
            }
            else if (this.state.stage==="between") {
                this.setState({timeRemaining: 30, stage:"question"});    
            }
            else if (this.state.stage==="question") {
                this.setState({timeRemaining: 5, stage: "between", questionNumber: this.state.questionNumber+1, questionCorrect: false});                
            }
        } else{
            this.setState({timeRemaining: this.state.timeRemaining-1});
        }
    }

    render() {
        return (
            <TriviaGameContext.Provider value= {{
                questionNumber: this.state.questionNumber,
                questions: this.state.questions,
                stage: this.state.stage,
                correct: this.state.correct,
                timeRemaining: this.state.timeRemaining,
                questionCorrect: this.state.questionCorrect,
                actions: {
                    start: this.handleStart,
                    questionAnswer: this.handleQuestionAnswer,
                    tick: this.tick,
                    restart: this.handleRestart
                }
            }}>
                {this.props.children}
            </TriviaGameContext.Provider>
        );
    }
}
export const Context = TriviaGameContext;
export const Consumer = TriviaGameContext.Consumer;
