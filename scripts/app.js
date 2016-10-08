



//==============GETTING QUESTION==================

function getQuestion() {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=k-pax&y=&plot=short&r=json', //need to find a baseball API
        type: 'Get',
        dataType: 'json',
        success: function (data) {
            var questionDisplay = document.getElementById('question');
            questionDisplay.textContent = (data.Plot);//change this one you figure out how the object displays information
        },
        error: function (err) {
            console.log(err)
        }
    })
}