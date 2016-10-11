
//===============FUNCTION QUESTION1 =====================================
//puts question and answer on the page, no options
//
// function question1 (question, answer){
//     var newQuestion = document.createElement("header");
//     newQuestion.textContent = (question);
//     var questDiv = document.getElementById("questContainer");
//     questDiv.appendChild(newQuestion);
//
//
//     var theAnswer = document.createElement("header");
//     theAnswer.textContent = (answer);
//     var ansDiv = document.getElementById("ansContainer");
//     ansDiv.appendChild(theAnswer);
//
//
// }
// question1("Who was the last pitcher before Travis Wood to hit a home run in the postseason?", "Joe Blanton")

//============^^^^^^^FUNCTION QUESTION1 ^^^^^^^^=====================================
//
//
// var questDiv = document.getElementById("questContainer");
//
// function Question(questionText, questionAnswerArr) {
//     //var newHeader = document.createElement("h1");
//     var newDiv = document.createElement("h1");
//     //newDiv.textContent = (questionArray[i]);
//     questDiv.appendChild(newDiv);
//
// }
    // 1. build header w/question text
    // 2. build options by doing above:
    // loop through and randomize answers

//     // buildAnswerOption() for each
//     // append all to DOM
//     this.removeEl = function() {
//         // remove this el from dom
//     }
//     this.render = function() {
//         // append all this to the dom
//     }
// }
//===========QUIZ FUNCTION=============
//put references to the function in array
//cycle through the array and use math.random
//this isn't working



// var questionFuncArray = [
//     question1,
//     question2,
//     question3,
//     question4,
//     question5
// ]
//
// var randomNumber = questionFuncArray[Math.floor(questionFuncArray.length * Math.random())];
// question = question[randomNumber];
//
// function Question (question, answer){
//     var newQuestion = document.createElement("header");
//     newQuestion.textContent = (question);
//     var questDiv = document.getElementById("questContainer");
//     questDiv.appendChild(newQuestion);

    // var theAnswer = document.createElement("header");
    // theAnswer.textContent = (answer);
    // var ansDiv = document.getElementById("ansContainer");
    // ansDiv.appendChild(theAnswer);

//     var theAnswer = document.createElement("div");
//     var label = document.createElement("label");
//     var checkbox = document.createElement("input");
//     theAnswer.appendChild(label);
//     theAnswer.appendChild(checkbox);
//     checkbox.checked = theAnswer;
//
//     theAnswer.textContent = (answer);
//     var ansDiv = document.getElementById("ansContainer");
//     ansDiv.appendChild(theAnswer);
//
// }
// question2("Who was the last player before Javier Baez to homer in a 1-0 postseason game?", "Boston's Mike Napoli")
// question3("Which two players are tied for the Major League record for most career home runs in the 162nd game of seasons?", "Dick Allen and Evan Longoria")
// question4("Who holds the Braves' hit streak record?", "Dan Uggla (33 games, 2011)")
// question5("Who was the last player to reach 1,000 career hits in a Giants uniform before Buster Posey?", "Rich Aurilia (2003)")
//===================^^^^^^^^QUIZ FUNCTION^^^^^^^^^^======================================

//=================BUILD ANSWER OPTION FUNCTION by JAMES======================
//function takes 2 arguments
//see console output below

//
// function buildAnswerOption(text, isAnswer) {
//     var isAnswerCorrect = isAnswer; // boolean
//     var answerText = text;
//
//     var el = document.createElement('div');//
//     var label = document.createElement('label');
//     var checkbox = document.createElement('input');
//     el.appendChild(label);
//     el.appendChild(checkbox);
//     checkbox.checked = isAnswerCorrect;
//     label.innerText = answerText;
//
//     return el;
// }

//console output
// buildAnswerOption("Micky Mantel", "Joe Blanton")
// <div>​<label>​Micky Mantel​</label>​<input>​</div>​
//

//=================^^^^^^^BUILD ANSWER OPTION FUNCTION^^^^^^^^^======================


//=================BUILD ANSWER OPTION FUNCTION 2 by Traci======================
//function takes 4 arguments
//assigns an id to the answer argument
//see console output below


// function buildAnswerOption(option, answer, option, option) {
//     var isAnswerCorrect = answer;
//     var optionText = option;
//
//     var questDiv = document.getElementById("questContainer");
//
//     var el = document.createElement("div");
//     var label = document.createElement("label");
//     var checkbox = document.createElement("input");
//     label.id = "answer";
//
//     el.appendChild(label);
//     el.appendChild(checkbox);
//
//     checkbox.checked = isAnswerCorrect;
//
//     label.innerText = answer;
//     return el;
// }
//
//
// var questDiv = document.getElementById("questContainer");
//
// //=====console output====================
// buildAnswerOption("Mickey Mantel", "Joe Blanton", "Ryne Sandburg", "Tim Gould")
//
// <div>
//     <label id="answer">
//     <input>
// </div>

//============^^^^^^^^^^BUILD ANSWER OPTION FUNCTION 2 by Traci^^^^^^^^===========================







//======================QUIZ CONSTRUCTOR========================
//this is populates the question, answer and three choices on the webpage
//however the answer is always in the same place
//
// Question();
//      function Question(question, answer, choice2, choice3, choice4) {
//          this.question = question;
//          this.answer = answer;
//          this.choice2 = choice2;
//          this.choice3 = choice3;
//          this.choice4 = choice4;
//      }
//
//      var firstQuestion = new Question ("Who was the last pitcher before Travis Wood to hit a home run in the postseason?", "Joe Blanton", "Mickey Mantel", "Yogi Berra", "Alex Rodriguez", "Ryne Sandburg");
//
//         question = document.getElementById('question');
//         question.textContent = (firstQuestion.question);
//
//         answer = document.getElementById('answer');
//         answer.textContent = (firstQuestion.answer);
//
//         choice2 = document.getElementById('choiceTwo');
//         choice2.textContent = (firstQuestion.choice2);
//
//         choice3 = document.getElementById('choiceThree');
//         choice3.textContent = (firstQuestion.choice3);
//
//         choice4 = document.getElementById('choiceFour');
//         choice4.textContent = (firstQuestion.choice4);
//======================^^^^^^^QUIZ CONSTRUCTOR^^^^^^^^^========================


//==============SUBMIT BUTTON and Calculation for Scoreboard ===========
//when the user clicks on the submit button
//if the answer is correct then it's one run
//if the answer is incorrect it's one out
//the button is working
//the calculation is not working


        // runs = document.getElementById("runs")
        // outs = document.getElementById("outs")
        //
        // runs = 0;
        // outs = 0;
        //
        //
        // submitButton = document.getElementById("submitAns");
        //
        // submitButton.onclick = function ifCorrect(){
        //     console.log('are you working? why yes I am!')
        //     var correctAnswer = document.getElementById('answer');
        //     console.log(correctAnswer)
        //
        //
        //     if (correctAnswer.checked === true) {
        //         alert('You are correct!')
        //         runs = runs.value;
        //         runs += 1;
        //
        //
        //     } else {
        //         alert('you are wrong')
        //         outs = outs.value;
        //         outs += 1;
        //     }
        // };
//==============^^^^^^^^SUBMIT BUTTON and Calculation for Scoreboard^^^^^^^=================

//=================================TIMER=======================================
//This time is a countdown from 10 to 0
//will need to be reset once a new question is populated

var count = 10;
var counter= setInterval(timer, 1000);

function timer(){
    count=count-1;
    if (count < 0) {
        return;
    }
    document.getElementById("timer").textContent = count;
};

//==============================^^^^^^^^^^TIMER^^^^^^^=======================================



//window.onload = function(event) {}