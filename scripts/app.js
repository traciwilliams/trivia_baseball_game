//==============GLOBAL VARIABLES ========================================

// var count = 30;//timer function
// var counter= setInterval(timer, 1000);

var submitButton = document.getElementById("submitAns");
var nextButton = document.getElementById("nextQuestion");
var runsEl = document.getElementById("theRuns");
var runsCounter = 0;
var outsEl = document.getElementById("theOuts");
var outsCounter = 0;
var questionCounter = 0;

var questionsArr = [];

var questionOne = new QuestionMaker("Who is the last player before Javier Baez to homer in a 1-0 postseason game is playing in the ALDS this year, but not for the same team.", "Boston's Mike Napoli", "Bernie Sanders", "Ryne Sandberg", "Michael Johnson")
var questionTwo = new QuestionMaker("Who led the 2007 Red Sox in wins, with 20?", "Josh Beckett (20-7)", "Option2", "Option3", "Option4")
var questionThree = new QuestionMaker("Who was the last player to reach 1,000 career hits in a Giants uniform before Buster Posey?","Rich Aurilia (2003)","Option2", "Option3", "Option4");
var questionFour = new QuestionMaker("Who finished second to Jose Fernandez in 2013 National League Rookie of the Year voting?","Yasiel Puig, Dodgers","Option2", "Option3", "Option4");
var questionFive = new QuestionMaker("Against what opposing team did Babe Ruth hit his first career home run?", "New York Yankees","Option2", "Option3", "Option4");
var questionSix = new QuestionMaker("Who was the first Major League player to pitch a ball over 100 mph?", "Nolan Ryan","Option2", "Option3", "Option4");
var questionSeven = new QuestionMaker("What Baltimore Orioles manager was ejected from a record 91 games?", "Earl Weaver","Option2", "Option3", "Option4");
var questionEight = new QuestionMaker("What player hit 70 home runs in 1998?", "Mark McGwire","Option2", "Option3", "Option4");
var questionNine = new QuestionMaker("Who beat out Ted Williams for the American League's Most Valuable Player award in 1941, when Williams hit for a .406 average?",
    "Joe DiMaggio","Option2", "Option3", "Option4");
var questionTen = new QuestionMaker("Who hit the ball that rolled between Bill Buckner's legs in the 1986 World Series?", "Mookie Wilson","Option2", "Option3", "Option4");

questionsArr.push(questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen); // add all


//=================^^^^^^^BUILD ANSWER OPTION FUNCTION^^^^^^^^^======================

function buildAnswerOption(questionObj) {
    //var questionEl = document.getElementById("questContainer");

    var question = document.getElementById("questionEl");
    question.innerText = (questionObj.question);
    //question.textContent = (questionTwo.question);

    var dummy2 = dummy2;
    var dummy3 = dummy3;
    var dummy4 = dummy4;

    var el = document.getElementById("radioButtons");
    //var tableEl = document.createElement('table');//this is the one
    var tableEl = document.getElementById("radioButtons");
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
    var label2 = document.createElement("label");
    var label3 = document.createElement("label");
    var label4 = document.createElement("label");

    //3 more checkboxes
    checkbox.setAttribute("type","radio");
    checkbox.setAttribute("name", "baseball");
    checkbox.id = 'answer';//questionOne.answer;

    checkbox2.setAttribute("type","radio");
    checkbox2.setAttribute("name", "baseball");
    checkbox3.setAttribute("type","radio");
    checkbox3.setAttribute("name", "baseball");
    checkbox4.setAttribute("type","radio");
    checkbox4.setAttribute("name", "baseball");

    // label.id = "answer";
    // label2.id = "dummy2";
    // label3.id = "dummy3";
    // label4.id = "dummy4";

    question = questionObj.question;
    label.innerText = questionObj.answer;
    label2.innerText = questionObj.dummy2;
    label3.innerText = questionObj.dummy3;
    label4.innerText = questionObj.dummy4;


    // question = questionTwo.question;
    // label.id = questionTwo.answer;
    // label.textContent = questionTwo.answer;
    // label2.textContent = questionTwo.dummy2;
    // label3.textContent = questionTwo.dummy3;
    // label4.textContent = questionTwo.dummy4;


    // label.textContent = answer;
    // label2.textContent = dummy2;
    // label3.textContent = dummy3;
    // label4.textContent = dummy4;

    //td
    tabledata.appendChild(label);
    tabledata2.appendChild(label2);
    tabledata3.appendChild(label3);
    tabledata4.appendChild(label4);

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
    tableEl.innerHTML ="";
    tableEl.appendChild(tableBody);
    tableBody.appendChild(tablerow2);

};


function QuestionMaker(question, answer, dummy2, dummy3, dummy4){
    this.question = question;
    this.answer = answer;
    this.dummy2 = dummy2;
    this.dummy3 = dummy3;
    this.dummy4 = dummy4;
};




//==================WINDOW.ONLOAD===============

window.onload = function(event) {

    buildAnswerOption(questionOne);

    // function timer(){
    //     count=count-1;
    //     if (count < 0)
    //     {
    //         clearInterval(counter);
    //         return;
    //     }
    //     document.getElementById("timer").innerHTML = count + " secs";
    // };


    submitButton.onclick = function ifCorrect() {
        console.log('are you working? why yes I am!')
        var correctAnswer = document.getElementById('answer');
        var answer = document.querySelector('#answer');


        //for (var i = 0; i < questionsArr.length; i++) {

            if (answer.checked === true) {
                alert('You are correct!')
                runsCounter = runsCounter + 1;

                document.getElementById("theRuns").innerText = runsCounter;
                return;

            } else {
                alert('you are wrong')
                outsCounter = outsCounter + 1;

                document.getElementById("theOuts").innerText = outsCounter;
                return;

            }

        //};

    }
}

//


// nextQuestion.onclick = function nextQuestion() {
//     var ques = questionsArr[questionCounter];
//     for (var i = 0; i < questionsArr.length; i++) {
//         buildAnswerOption([i]);
//
//         questionCounter++;
//     }
// };


nextQuestion.onclick = function nextQuestion() {
    //for (var i = 0; i < questionsArr.length; i++){
    //var ques = questionsArr[questionCounter];
    //}

    //clear out
    questionCounter = questionCounter + 1;
    buildAnswerOption(questionsArr[questionCounter]);

}


//
// //=========JAMES CODE==========
// function nextQuestion() {
//     var ques = questionsArr[questionCounter];
//     // call function to build question
//     questionCounter = questionCounter + 1;
// }