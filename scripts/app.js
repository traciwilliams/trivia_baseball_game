
var question = {};
    question.one = 'What was the score of the October 1, 1961 game in which Roger Maris hit his record-breaking 61st home run, breaking Babe Ruth’s 34-year-old single-season record?'
    question.two = 'How many intentional walks did Roger Maris get in his 61 home run season?'
    question.three = 'Name the first player born in the 1990s to appear in a major league game.'
    question.four = 'Name the first AL expansion team to accomplish each of the following: First Division Title (1976), First League Pennant (1980), and World Series Champion (1985)'
    question.five =  'Name the pitcher with the best won-lost percentage of any hurler with at least with 15 wins against the New York Yankees.'


var answer = {};
    answer.one = 'Yankees 1 … Red Sox 0';
    answer.two = 'Zero';
    answer.three = 'Cubs’ shortstop Starlin Castro';
    answer.four = 'Kansas City Royals';
    answer.five = 'Babe Ruth';

window.onload = getQuestion();

    function getQuestion (){


        var questionDisplay = document.getElementById('question');
        questionDisplay.textContent = (question.one);//change this one you figure out how the object displays information

        var questionDisplay = document.getElementById('buttonNumberOne');
        questionDisplay.textContent = (answer.one);

        // var questionDisplay = document.getElementById('buttonNumberTwo');
        // questionDisplay.textContent = (data.Title);
        //
        // var questionDisplay = document.getElementById('buttonNumberThree');
        // questionDisplay.textContent = (data.Year);
        //
        // var questionDisplay = document.getElementById('buttonNumberFour');
        // questionDisplay.textContent = (data.Title);
    }




//============QUIZ CONSTRUCTOR=========

function quizConstructor(question, answer) {
    this.question = question;
    this.answer = answer;

}





//==============GETTING QUESTION USING AN API==================
//might have to change this if I can't find an API and make my own array of questions
//
// startButton = document.getElementById("beginGame");
// startButton.onclick = function getQuestion() {
//
// window.onload = getQuestion();
//
// function getQuestion() {
//
//     $.ajax({
//             url: 'http://www.omdbapi.com/?t=k-pax&y=&plot=short&r=json', //need to find a baseball API
//             type: 'Get',
//             dataType: 'json',
//             success: function (data) {
//                 var questionDisplay = document.getElementById('question');
//                 questionDisplay.textContent = (data.Plot);//change this one you figure out how the object displays information
//
//                 //look at these...I think they need to be changed
//                 //also would like a "pause" before these show up
//                 var questionDisplay = document.getElementById('buttonNumberOne');
//                 questionDisplay.textContent = (data.Year);
//
//                 var questionDisplay = document.getElementById('buttonNumberTwo');
//                 questionDisplay.textContent = (data.Title);
//
//                 var questionDisplay = document.getElementById('buttonNumberThree');
//                 questionDisplay.textContent = (data.Year);
//
//                 var questionDisplay = document.getElementById('buttonNumberFour');
//                 questionDisplay.textContent = (data.Title);
//
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         })
//     }

//==============TIMER==========
//not finished...what happens when you get to one?

var count = 60;
var counter= setInterval(timer, 1000); //1000 will  run it every 1 second

function timer(){
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
  document.getElementById("timer").textContent = count + " secs";
};




/*have to figure out the questions, then make an if else statement on them...and then use the timer
and the scoreboard depending on the choice user makes..then figure out how to end the game and restart it
 */

