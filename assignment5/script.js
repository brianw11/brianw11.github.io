$(document).ready(function() {



    var questions = [
            {
                question: "What movie contained the quote: 'All work and no play makes Jack a dull boy.'?",
                answers: ["Psycho", "The Shining", "A Few Good Men", "Top Gun"],
                answer: "The Shining"
            },
            {
                question: "Name the worlds largest island?",
                answers: ["Antarctica", "Australia", "Greenland", "Iceland"],
                answer: "Greenland"
            },
            {
                question: "In which season do most burglaries take place?",
                answers: ["Spring", "Summer", "Fall", "Winter"],
                answer: "Winter"
            },
            {
                question: "On what day do most automobile accidents occur?",
                answers: ["Monday", "Saturday", "Friday", "Sunday"],
                answer: "Saturday"
            },
            {
                question: "What was featured in the first TV commercial advertising a toy?",
                answers: ["Mr. Potato Head", "Big Wheel", "Stretch Armstrong", "Legos"],
                answer: "Mr. Potato Head"
            }    
    ];

    var correct = 0;
    var incorrect = 0;
    var counter = 60;
    var intervalId;



    function runTimer() {
        counter = 10;
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000)
    }


    function decrementTimer() {
        counter--;
        $('.timer').text(counter);
        if (counter === 0) {
            stopTimer();
        }
    }


    function stopTimer() {
        clearInterval(intervalId);
        submitGame();
    }



    function addQuestions() {
        $('.question-box').html("");
        for (var i=0; i<questions.length; i++) {
            $('.question-box').append($("<h4>" + questions[i].question + "</h4>"));
            for (var j=0; j<questions[i].answers.length; j++) {
            $('.question-box').append($("<input type='radio' value='" + questions[i].answers[j] + "' name='question-" + i + "'>" + questions[i].answers[j] + "<br>" ));
            }
            $('.question-box').append('<hr>');
        }
    }


    function submitGame() {
        for (var i=0; i<questions.length; i++)  {
            $.each($("input[name='question-" + i + "']:checked"), function() {
                var userGuess = $(this).attr('value');
                if (userGuess === questions[i].answer) {
                    correct++;
                } else {
                    incorrect++;
                }
            });  
        }
        $('.correct').text(correct);
        $('.incorrect').text(incorrect);
        $('.game-over').show();
    }


    function newGame() {
        correct = 0;
        incorrect = 0;
        shuffleQuestions();
        shuffleAnswers();
        addQuestions();
        runTimer();
        $(".game-over").hide();
    }


    function shuffleQuestions() {
        questions.sort(function(a, b){return 0.5 - Math.random()});
    }


    function shuffleAnswers() {
        for (var i=0; i<questions.length; i++) {
            questions[i].answers.sort(function(a, b){return 0.5 - Math.random()});
        }   
    }

    
    
    newGame();

    $('#submit-button').on('click', function() {
        stopTimer();
    });

    $('#newGame').on('click', function() {
        newGame();
    });

});


