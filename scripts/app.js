



//==============GETTING QUESTION==================


startButton = document.getElementById("beginGame");



startButton.onclick = function getQuestion() {

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
