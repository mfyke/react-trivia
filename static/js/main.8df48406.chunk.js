(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,a){e.exports=a(276)},176:function(e,t,a){},177:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),i=a.n(s),c=(a(176),a(177),a(21)),o=a(22),l=a(24),u=a(23),m=a(25),h=r.a.createContext(),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={questionNumber:0,questions:[{question:"Which character said: If I was dead you could bang me all you want. I mean, who cares? A dead body is like a piece of trash. I mean, shove as much shit in there as you want. Fill me up with cream, make a stew out of my ass. What's the big deal? Bang me, eat me, grind me up into little pieces, throw me in the river. Who gives a shit? You're dead, you're dead! Oh shit! Is my mic on?",answers:["Charlie","Mac","Frank","Dennis"],correctAnswer:2,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-danny-devito.jpg"},{question:"Yeah! Okay! This is great because earlier, you were implying that I was racist because you thought that I was implying that all black people are related, and then it turns out that you people actually are!",answers:["Mac","Frank","Dee","Cricket"],correctAnswer:0,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-rob-mcelhenney.jpg"},{question:"Which character said: That's bullshit, 'cause I'm a better smasher than you guys! I should be on the head of the smashing team! You wanna have a smash-off?",answers:["Artemis","Doyle McPoyle","Mac","Dee"],correctAnswer:2,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-rob-mcelhenney.jpg"},{question:"Which character said: Oh not too much, Charlie is using you to prove that he's not racist, and then he asked me out on a date?",answers:["Dee","Ruby Taft","The Waitress","Artemis"],correctAnswer:2,image:"https://d1o51r9qdgnnlz.cloudfront.net/static_image/d93b4f7a-4b7f-4a11-82f3-4041a23c156e/static.jpg"},{question:"Which character said: Hello. Who is this? Who?... Who is...? I don't know that name. Who? Who? Oh, oh, Waitress. Why didn't you just say that?",answers:["Dee","Frank","Charlie","Dennis"],correctAnswer:3,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-glenn-howerton.jpg"},{question:"Which character said: Because Dennis is a bastard man!",answers:["Dennis","Dee","Charlie","Mac"],correctAnswer:0,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-glenn-howerton.jpg"},{question:"Which character said: Did you fuck my mom, Santa Claus? Did you fuck my mom? Did you fuck her? DID YOU FUCK MY FUCKING MOM? DID YOU FUCK MY MOM, SANTA? AAAAH!",answers:["'Da Maniac","Charlie","Mac","Dennis"],correctAnswer:1,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-charlie-day.jpg"},{question:"Which character said: Hey, did he send you any dick pics? 'Cause it could be a mess down there.",answers:["Dee","Artemis","Mac","The Waitress"],correctAnswer:1,image:"http://i1.sndcdn.com/artworks-000225331003-evp1yy-original.jpg"},{question:"Which character said: Mm. I have contained my rage for as long as possible, but I shall unleash my fury upon you like the crashing of a thousand waves! Begone, vile man! Begone from me! A starter car? This car is a finisher car! A transporter of gods! The golden god! I am untethered, and my rage knows no bounds!",answers:["Dee","Frank","Cricket","Dennis"],correctAnswer:3,image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-its-always-sunny-in-philadelphia-glenn-howerton.jpg"},{question:"Which character said: Hey do you guys mind if I go into the bathroom and smoke some PCP?",answers:["Mac","Cricket","Charlie","Dennis"],correctAnswer:1,image:"https://www.itsalways.com/wp-content/uploads/2017/07/Rickety-Cricket.jpg"}],stage:"beginning",correct:0,timeRemaining:30,questionCorrect:!1},a.shuffle=function(e){for(var t=0;t<e.length;t++){var a=t+Math.floor(Math.random()*(e.length-t)),n=e[a];e[a]=e[t],e[t]=n}return e},a.handleStart=function(){a.setState({stage:"question",questions:a.shuffle(a.state.questions)})},a.handleQuestionAnswer=function(e){parseInt(e)===a.state.questions[a.state.questionNumber].correctAnswer?a.setState({correct:a.state.correct+1,stage:"between",questionNumber:a.state.questionNumber+1,timeRemaining:5,questionCorrect:!0}):a.setState({stage:"between",questionNumber:a.state.questionNumber+1,timeRemaining:5,questionCorrect:!1})},a.handleRestart=function(){a.setState({questionNumber:0,correct:0,stage:"question",questions:a.shuffle(a.state.questions)})},a.tick=function(){1===a.state.timeRemaining?"between"===a.state.stage&&a.state.questionNumber===a.state.questions.length?a.setState({timeRemaining:30,stage:"end",questionCorrect:!1}):"between"===a.state.stage?a.setState({timeRemaining:30,stage:"question"}):"question"===a.state.stage&&a.setState({timeRemaining:5,stage:"between",questionNumber:a.state.questionNumber+1,questionCorrect:!1}):a.setState({timeRemaining:a.state.timeRemaining-1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Provider,{value:{questionNumber:this.state.questionNumber,questions:this.state.questions,stage:this.state.stage,correct:this.state.correct,timeRemaining:this.state.timeRemaining,questionCorrect:this.state.questionCorrect,actions:{start:this.handleStart,questionAnswer:this.handleQuestionAnswer,tick:this.tick,restart:this.handleRestart}}},this.props.children)}}]),t}(n.Component),d=h,g=h.Consumer,p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){return e.context.actions.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("div",null,"question"===this.context.stage?r.a.createElement("h1",null,this.context.timeRemaining):null)}}]),t}(n.Component);p.contextType=d;var w=p,b=function(){return r.a.createElement(g,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"question"},e.questions[e.questionNumber].question))})},y=function(){return r.a.createElement(g,null,function(e){var t=e.questionNumber-1,a=e.questions[t].correctAnswer;return r.a.createElement("div",null,r.a.createElement("h1",null,"You are ".concat(e.questionCorrect?"correct":"incorrect","!")),r.a.createElement("h1",null,"The correct answer is ".concat(e.questions[t].answers[a])),r.a.createElement("img",{className:"answerPic",alt:"answer",src:e.questions[t].image}))})},v=a(15),q=a(18),E=a.n(q),k=a(37),C=a.n(k),A=a(17),N=a.n(A),j=a(36),D=a.n(j),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value},function(){setTimeout(function(){a.context.actions.questionAnswer(a.state.value)},300)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(g,null,function(a){return r.a.createElement("div",{className:t.root},r.a.createElement(D.a,{component:"fieldset",className:t.formControl},r.a.createElement(C.a,{"aria-label":"answer",name:"answer",className:t.group,value:e.state.value,onChange:e.handleChange},r.a.createElement(N.a,{value:"0",control:r.a.createElement(E.a,{color:"primary"}),label:a.questions[a.questionNumber].answers[0],labelPlacement:"start"}),r.a.createElement(N.a,{value:"1",control:r.a.createElement(E.a,{color:"primary"}),label:a.questions[a.questionNumber].answers[1],labelPlacement:"start"}),r.a.createElement(N.a,{value:"2",control:r.a.createElement(E.a,{color:"primary"}),label:a.questions[a.questionNumber].answers[2],labelPlacement:"start"}),r.a.createElement(N.a,{value:"3",control:r.a.createElement(E.a,{color:"primary"}),label:a.questions[a.questionNumber].answers[3],labelPlacement:"start"}))))})}}]),t}(r.a.Component);W.contextType=d;var O=Object(v.withStyles)(function(e){return{root:{},formControl:{margin:3*e.spacing.unit},group:{margin:"".concat(e.spacing.unit,"px 0")}}})(W),I=a(38),M=function(){return r.a.createElement(g,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Always Sunny Quote Trivia!"),r.a.createElement("h3",null,"You will have 30 seconds per question. Press the start button below to begin the game."),r.a.createElement(I.a,{variant:"contained",className:"startButton",color:"primary",onClick:e.actions.start},"Start!"))})},R=function(){return r.a.createElement(g,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Game Over!"),r.a.createElement("h1",null,"You got ".concat(e.correct," out of ").concat(e.questionNumber," correct!")),r.a.createElement(I.a,{variant:"contained",color:"primary",className:"restartButton",onClick:e.actions.restart},"Restart!"))})};var S=function(){return r.a.createElement(g,null,function(e){var t;switch(e.stage){case"beginning":t=r.a.createElement(M,null);break;case"question":t=r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(b,null),r.a.createElement(O,null));break;case"between":t=r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(y,null));break;case"end":t=r.a.createElement("div",null,r.a.createElement(R,null));break;default:t=r.a.createElement("div",null,r.a.createElement("h1",null,"error with game stage state"))}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://external-preview.redd.it/vamnazEWjPlQWM3jZyVP6PbL_Ql93UCSfvb25Czrt4w.png?auto=webp&s=505cff58bedea30329c609c6cc1f3fe5e8ec4610",className:"App-logo",alt:"logo"})),t)})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,1,2]]]);
//# sourceMappingURL=main.8df48406.chunk.js.map