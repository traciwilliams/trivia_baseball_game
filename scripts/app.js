
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




//=================^^^^^^^BUILD ANSWER OPTION FUNCTION^^^^^^^^^======================

function buildAnswerOption(answer) {
    console.log(answer,  'if you do answer.question = the question you wrote')
    var isAnswerCorrect = answer;

    var el = document.getElementById("radioButtons");
    //var tableEl = document.createElement('table');
    var tableEl = document.getElementById("radioButtons")
    var tableBody = document.createElement("tbody");

    var tablerow = document.createElement("tr");
    var tablerow2 = document.createElement("tr");//another tablerow

    var tabledata = document.createElement("td"); // x4
    var tabledata2 = document.createElement("td");
    var tabledata3 = document.createElement("td");
    var tabledata4 = document.createElement("td");


    var checkbox = document.createElement("input");
    var checkbox2 = document.createElement("input");
    var checkbox3 = document.createElement("input");
    var checkbox4 = document.createElement("input");

    var label = document.createElement("label");

    //3 more checkboxes
    checkbox.setAttribute("type","radio");
    checkbox.setAttribute("name", "baseball");
    checkbox2.setAttribute("type","radio");
    checkbox2.setAttribute("name", "baseball");
    checkbox3.setAttribute("type","radio");
    checkbox3.setAttribute("name", "baseball");
    checkbox4.setAttribute("type","radio");
    checkbox4.setAttribute("name", "baseball");

    label.id = "answer";


    checkbox.checked = isAnswerCorrect;
    label.innerText = answer;

    //td
    tabledata.appendChild(label);

    // arrray of your answers
    // label, label2, label3, label4
    //write function thats returns a random value from the array/
    // return that value of the label that you chose, and slice it out of the array (look up removing certain index numbers from
    //array


    tabledata.appendChild(checkbox);
    tabledata2.appendChild(checkbox2);
    tabledata3.appendChild(checkbox3);
    tabledata4.appendChild(checkbox4);


    //tr
    tablerow.appendChild(tabledata);
    tablerow.appendChild(tabledata2);
    tablerow2.appendChild(tabledata3);
    tablerow2.appendChild(tabledata4);

    //td > tr > tbody > table
    tableBody.appendChild(tablerow);

    tableEl.appendChild(tableBody);
    tableBody.appendChild(tablerow2);

}





//==============SUBMIT BUTTON and Calculation for Scoreboard ===========
//when the user clicks on the submit button
//if the answer is correct then it's one run
//if the answer is incorrect it's one out
//the button is working
//the calculation is not working


runs = document.getElementById("runs")
outs = document.getElementById("outs")

runs = 0;
outs = 0;


submitButton = document.getElementById("submitAns");

submitButton.onclick = function ifCorrect(){
    console.log('are you working? why yes I am!')
    var correctAnswer = document.getElementById('answer');
    console.log(correctAnswer)


    if (correctAnswer.checked === true) {
        alert('You are correct!')
        runs = runs.value;
        runs += 1;


    } else {
        alert('you are wrong')
        outs = outs.value;
        outs += 1;
    }
};



































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