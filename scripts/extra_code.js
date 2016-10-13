// var questionArray = [
//     "1. Who was the last pitcher before Travis Wood to hit a home run in the postseason?",
//     "2. The last player before Javier Baez to homer in a 1-0 postseason game is playing in the ALDS this year, but not for the same team. Who is it?",
//     "3. Jose Bautista's 6th postseason HR tied him for the all-time Blue Jays lead. Whose mark did he equal?",
//     "4. Madison Bumgarner threw his third career postseason shutout last night. Who holds the all-time record with four?",
//     "5. Who recorded the first hit in the first Wild Card Game in MLB history in 2012?",
//     "6. Which two players are tied for the Major League record for most career home runs in the 162nd game of seasons?"
// ];
//
// var answerArray = [
//     "1. Joe Blanton, PHI",
//     "2. Boston's Mike Napoli",
//     "3. Joe Carter",
//     "4. Christy Mathewson",
//     "5. David Ross, ATL",
//     "6. Dick Allen and Evan Longoria"
];

// for (i = 0; i < questionArray.length; i++) {
//     var questions = questionArray[i];
//     console.log(questions);
// }
//
// for (i = 0; i < answerArray.length; i++) {
//     var answers = answerArray[i];
//     console.log(answers);
// }


// var questDiv = document.getElementById("questContainer");
// var ansDiv = document.getElementById("ansContainer");
//
//
// for (i = 0; i < questionArray.length; i++) {
//     var newDiv = document.createElement("div");
//     newDiv.textContent = (questionArray[i]);
//     questDiv.appendChild(newDiv);
//
//     var newDiv2 = document.createElement("li");
//     newDiv2.textContent = (answerArray[i]);
//     ansDiv.appendChild(newDiv2);
// }





this works===============================

function question1 (question, answer){
    var newQuestion = document.createElement("header");
    newQuestion.textContent = (question);
    var questDiv = document.getElementById("questContainer");
    questDiv.appendChild(newQuestion);


    var theAnswer = document.createElement("header");
    theAnswer.textContent = (answer);
    var ansDiv = document.getElementById("ansContainer");
    ansDiv.appendChild(theAnswer);


}
question1("Who was the last pitcher before Travis Wood to hit a home run in the postseason?", "Joe Blanton")

^^^^^=====================================








var newDiv = document.createElement("div");
//     newDiv.textContent = (questionArray[i]);
//     questDiv.appendChild(newDiv);

function by james

function buildAnswerOption(text, isAnswer) {
    var isAnswerCorrect = isAnswer; // boolean
    var answerText = text;

    var el = document.createElement('div');//
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    el.appendChild(label);
    el.appendChild(checkbox);
    checkbox.checked = isAnswerCorrect;
    label.innerText = answerText;

    return el;
}


//#fourButtons {
//	width: 100%;
//	margin: 0 auto;
//	padding: 0px 20px 0px 20px;
//}
//
//
//#buttonNumberOne,
//#buttonNumberTwo,
//#buttonNumberThree,
//#buttonNumberFour, {
//	width: 80px;
//	margin: 0 auto;
//	padding: 0px 20px 0px 20px;
//}




THIS WORKS

///NEW ONE HERE

function buildAnswerOption(answer) {
    var isAnswerCorrect = answer;

    var el = document.getElementById("radioButtons");
    var table = document.createElement('table');
    var tableBody = document.createElement("tbody");

    var tablerow = document.createElement("tr");
    //var tablerow2 = document.createElement("tr");//another tablerow

    var tabledata = document.createElement("td"); // x4
    //var tabledata2 = document.createElement("td");
    //var tabledata3 = document.createElement("td");
    //var tabledata4 = document.createElement("td");


    var checkbox = document.createElement("input");
    //var checkbox2 = document.createElement("input");
    //var checkbox3 = document.createElement("input");
    //var checkbox4 = document.createElement("input");

    var label = document.createElement("label");

    //3 more checkboxes
    checkbox.setAttribute("type","radio");
    checkbox.setAttribute("name", "baseball");
    //checkbox2.setAttribute("type","radio");
    //checkbox2.setAttribute("name", "baseball");
    //checkbox3.setAttribute("type","radio");
    //checkbox3.setAttribute("name", "baseball");
    //checkbox4.setAttribute("type","radio");
    //checkbox4.setAttribute("name", "baseball");


    label.id = "answer";
    checkbox.checked = isAnswerCorrect;
    label.innerText = answer;


    //td
    tabledata.appendChild(label);
    tabledata.appendChild(checkbox);

    //tabledata2.appendChild(checkbox2);
    //tabledata3.appendChild(checkbox3);
    //tabledata4.appendChild(checkbox4);


    //tr
    tablerow.appendChild(tabledata);
    //tablerow2.appendChild(tabledata2);
    //tablerow2.appendChild(tabledata3);
    //tablerow2.appendChild(tabledata4);

    //td > tr > tbody > table
    tablerow.appendChild(tabledata);
    tableBody.appendChild(tablerow);
    table.appendChild(tableBody);




    // el.appendChild(table);
    //
    //
    //
    //
    // ////tabledata.appendChild(label);
    // ////el.appendChild(label);
    // el.appendChild(checkbox);
    //
    var questDiv = document.getElementById("radioButtons");
    questDiv.appendChild(label);

}


// I MIGHT NEED THIS CODE BELOW DO NOT DELETE UNTIL PROJECT IS FINISHED

//===============FUNCTION QUESTION1 =====================================
//puts question and answer on the page, no options

function question1 (question, answer){
    var newQuestion = document.createElement("header");
    newQuestion.textContent = (question);
    var questDiv = document.getElementById("questContainer");
    questDiv.appendChild(newQuestion);


    var theAnswer = document.createElement("header");
    theAnswer.textContent = (answer);
    var ansDiv = document.getElementById("ansContainer");
    ansDiv.appendChild(theAnswer);


}
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


====================================


// el.appendChild(table);
//
//
//
//
// ////tabledata.appendChild(label);
// ////el.appendChild(label);
// el.appendChild(checkbox);
//
// var questDiv = document.getElementById("radioButtons");
// questDiv.appendChild(label);

//


function QuestionMaker(question, answer, dummyAnswer1, dummyAnswer2, dummyAnswer3){
    this.question = question;
    this.answer = answer;
}

// pass this to the build an answer function
var questionOne = new QuestionMaker('Who was the last pitcher before Travis Wood to hit a home run in the postseason?', 'dummy anser')

label.id = questionOne.answer
label2.innerText = questionOne.dummyAnswer1
label3.innerText =

    // Calling the function
// most likely in a next question button
// make your construtor which is line 349, then call function builAnswerOptions(questionOne)





================================






//THIS WORKS DO NOT DELETE!!!
//=================BUILD ANSWER OPTION FUNCTION 2 by Traci======================
// function takes 4 arguments
// assigns an id to the answer argument
// see console output below
//
// THIS WORKS DO NOT DELETE
// function buildAnswerOption(answer, option1, option2, option3) {
//     var isAnswerCorrect = answer;
//     var option1 = option1;
//     var option2 = option2;
//     var option3 = option3;
//
//     //var optionText = option;
//     //var questDiv = document.getElementById("questContainer");
//
//     var el = document.getElementById("radioButtons");
//     var el1 = document.getElementById("radioButtons");
//     var el2 = document.getElementById("radioButtons");
//     var el3 = document.getElementById("radioButtons");
//
//     var label = document.createElement("label");
//     var label1 = document.createElement("label");
//     var label2 = document.createElement("label");
//     var label3 = document.createElement("label");
//
//     var checkbox = document.createElement("input");
//     var checkbox1 = document.createElement("input");
//     var checkbox2 = document.createElement("input");
//     var checkbox3 = document.createElement("input");
//
//     checkbox.setAttribute("type","radio");
//     checkbox1.setAttribute("type","radio");
//     checkbox2.setAttribute("type","radio");
//     checkbox3.setAttribute("type","radio");
//
//     checkbox.setAttribute("name", "baseball");
//     checkbox1.setAttribute("name", "baseball");
//     checkbox2.setAttribute("name", "baseball");
//     checkbox3.setAttribute("name", "baseball");
//
//     label.id = "answer";
//
//
//
//      //build the other 3 options
//      // make array []
//      // put all of the 4 elements into []
//      // use Math.random() to shuffle
//
//
//     el.appendChild(label);
//     el1.appendChild(label1);
//     el2.appendChild(label2);
//     el3.appendChild(label3);
//
//     el.appendChild(checkbox);
//     el1.appendChild(checkbox1);
//     el2.appendChild(checkbox2);
//     el3.appendChild(checkbox3);
//
//     checkbox.checked = isAnswerCorrect;
//     checkbox1.checked = option1;
//     checkbox2.checked = option2;
//     checkbox3.checked = option3;
//
//     label.innerText = answer;
//     label1.innerText = option1;
//     label2.innerText = option2;
//     label3.innerText = option3;
//
//     var questDiv = document.getElementById("radioButtons");
//     questDiv.appendChild(label);
//     questDiv.appendChild(label1);
//     questDiv.appendChild(label2);
//     questDiv.appendChild(label3);
// }


//var questDiv = document.getElementById("questContainer");
//
// //=====console output====================
// buildAnswerOption("Joe Blanton", "Mickey Mantel", "Ryne Sandburg", "Tim Gould")
//
// <div>
//     <label id="answer">
//     <input>
// </div>




function buildAnswerOption(answer) {
    var isAnswerCorrect = answer;

    var el = document.getElementById("radioButtons");

    var tablerow = document.createElement("tr");
    var tabledata = document.createElement("td");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    el.appendChild(tablerow);
    tablerow.appendChild(tabledata);
    tablerow.appendChild(label);

    checkbox.setAttribute("type","radio");
    checkbox.setAttribute("name", "baseball");

    label.id = "answer";

    //tabledata.appendChild(label);
    //el.appendChild(label);
    el.appendChild(checkbox);

    checkbox.checked = isAnswerCorrect;

    label.innerText = answer;

    var questDiv = document.getElementById("radioButtons");
    questDiv.appendChild(label);

}

















//============^^^^^^^^^^BUILD ANSWER OPTION FUNCTION 2 by Traci^^^^^^^^===========================







//======================QUIZ CONSTRUCTOR========================
//this is populates the question, answer and three choices on the webpage
//however the answer is always in the same place
//need to be able to loop thru these questions

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

// var count = 10;
// var counter= setInterval(timer, 1000);
//
// function timer(){
//     count=count-1;
//     if (count < 0) {
//         return;
//     }
//     document.getElementById("timer").textContent = count;
// };

//==============================^^^^^^^^^^TIMER^^^^^^^=======================================



//window.onload = function(event) {}