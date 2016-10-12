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