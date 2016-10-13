
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
    //var questionEl = document.getElementById("questContainer");

    var question = document.getElementById("questionEl");
    question.textContent = (questionOne.question);
    //question.textContent = (questionTwo.question);

    var isAnswerCorrect = answer;
    var dummy2 = dummy2;
    var dummy3 = dummy3;
    var dummy4 = dummy4;

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
    var label2 = document.createElement("label");
    var label3 = document.createElement("label");
    var label4 = document.createElement("label");

    //3 more checkboxes
    checkbox.setAttribute("type","radio");
    checkbox.setAttribute("name", "baseball");
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

    question = questionOne.question;
    label.id = questionOne.answer;
    label.innerText = questionOne.answer;
    label2.innerText = questionOne.dummy2;
    label3.innerText = questionOne.dummy3;
    label4.innerText = questionOne.dummy4;


    // question = questionTwo.question;
    // label.id = questionTwo.answer;
    // label.innerText = questionTwo.answer;
    // label2.innerText = questionTwo.dummy2;
    // label3.innerText = questionTwo.dummy3;
    // label4.innerText = questionTwo.dummy4;

    checkbox.checked = isAnswerCorrect;

    // label.innerText = answer;
    // label2.innerText = dummy2;
    // label3.innerText = dummy3;
    // label4.innerText = dummy4;

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

    tableEl.appendChild(tableBody);
    tableBody.appendChild(tablerow2);

}


function QuestionMaker(question, answer, dummy2, dummy3, dummy4){
    this.question = question;
    this.answer = answer;
    this.dummy2 = dummy2;
    this.dummy3 = dummy3;
    this.dummy4 = dummy4;
}

// pass this to the build an answer function
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


//==============Calculation for Scoreboard ===========
//when the user clicks on the submit button
//if the answer is correct then it's one run
//if the answer is incorrect it's one out
//the button is working
//the calculation is not working

runs = document.getElementById("runs");
outs = document.getElementById("outs");

runs = 0;
outs = 0;

function scoreRuns () {
    scoreRuns = scoreRuns+1;
    return;

    document.getElementById("runs").textContent = scoreRuns;
};

function scoreOuts (){
    scoreOuts = scoreOuts+1;
    return scoreOuts;


    document.getElementById("outs").textContent = scoreOuts;
};



//==============SUBMIT BUTTON  ===========
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
