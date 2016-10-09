



//==============GETTING QUESTION==================
//might have to change this if I can't find an API and make my own array of questions
//
// startButton = document.getElementById("beginGame");
// startButton.onclick = function getQuestion() {

window.onload = getQuestion();

function getQuestion() {

    $.ajax({
            url: 'http://www.omdbapi.com/?t=k-pax&y=&plot=short&r=json', //need to find a baseball API
            type: 'Get',
            dataType: 'json',
            success: function (data) {
                var questionDisplay = document.getElementById('question');
                questionDisplay.textContent = (data.Plot);//change this one you figure out how the object displays information

                //look at these...I think they need to be changed
                //also would like a "pause" before these show up
                var questionDisplay = document.getElementById('buttonNumberOne');
                questionDisplay.textContent = (data.Year);

                var questionDisplay = document.getElementById('buttonNumberTwo');
                questionDisplay.textContent = (data.Title);

                var questionDisplay = document.getElementById('buttonNumberThree');
                questionDisplay.textContent = (data.Year);

                var questionDisplay = document.getElementById('buttonNumberFour');
                questionDisplay.textContent = (data.Title);

            },
            error: function (err) {
                console.log(err)
            }
        })
    }

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

