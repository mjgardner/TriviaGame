var quiz = [
    {
        "What does the online acronym SMH stand for?": {
            "Shaking My Head": "correct",
            "Seeking More History": "incorrect",
            "Sailing Monster Headwinds": "incorrect",
            "Soon Meeting Him": "incorrect"
        },
    },
    {
        "On which popular website do users send tweets?": {
            "Twitter": "correct",
            "Tweeter": "incorrect",
            "Facebook": "incorrect",
            "MySpace": "incorrect" 
        },
    },
    {
        "What was the first console video game that allowed the game to be saved?": {
            "The Legend of Zelda": "correct",
            "Super Mario Bros": "incorrect",
            "Doom": "incorrect",
            "Pac-Man": "incorrect"
        },
    },
    {
        "HTML and CSS are computer languages used to create what?": {
            "Websites": "correct",
            "Trivia Games": "incorrect",
            "Vector Graphics": "incorrect",
            "Storage Drivers": "incorrect"
        }
    },
    {
        "In what year was the first Apple computer released?": {
            "1976": "correct",
            "1977": "incorrect",
            "1982": "incorrect",
            "1997": "incorrect"
        }
    },
    {
        "In database programming, SQL is an acronym for what?": {
            "Structured Query Language": "correct",
            "Simple Query Language": "incorrect",
            "Structured Question Language": "incorrect",
            "Simple Quality Language": "incorrect"
        }
    }
];

var quizTimeout;
var quizInterval;

$(document).ready(function(){
    $("#start").click(function(){
        $("#start-row").attr("style", "display: none");
        $("#game").attr("style", "display: block");
        displayQuestions();
        startTimer();
        $("#finish").click(function(){
            $("#endMessage").text("All Done!");
            tallyQuestions();
        });
    });
});

function displayQuestions(){
    var shuffledQuiz = shuffle(quiz);
    shuffledQuiz.forEach(function(questionObj, questionIndex){
        var question = Object.keys(questionObj)[0];
        var answers  = questionObj[question];

        var questionCard = $("<div>")
            .addClass("card");
        var questionCardBody = $("<div>")
            .addClass("card-body");
        var questionCardTitle = $("<h2>")
            .addClass("card-title")
            .text(question);
        questionCardBody.append(questionCardTitle);
        var questionCardText = $("<div>")
            .addClass("card-text");

        var shuffledAnswers = shuffle(Object.keys(answers));
        shuffledAnswers.forEach(function(answer, answerIndex){
            var radioButton = $("<input>")
                .addClass("form-check-input")
                .attr("type", "radio")
                .attr("name", "q" + questionIndex)
                .attr("id", "q" + questionIndex + "a" + answerIndex)
                .attr("value", answers[answer]);
            var radioLabel = $("<label>")
                .addClass("form-check-label")
                .attr("for", "q" + questionIndex + "a" + answerIndex)
                .html(answer);
            var bootStrapRadio = $("<div>")
                .addClass("form-check")
                .append(radioButton, radioLabel);
            questionCardText.append(bootStrapRadio);
        });
        questionCardBody.append(questionCardText);
        questionCard.append(questionCardBody);
        $("#questions").append(questionCard);
    });
}

function startTimer(){
    quizTimeout = setTimeout(function(){
        $("#endMessage").text("Time's Up!");
        tallyQuestions();
    }, parseInt($("#timer").text()) * 1000);
    quizInterval = setInterval(function(){
        var oldTimer = $("#timer").text();
        oldTimer--;
        $("#timer").text(oldTimer);
    }, 1000);
}

function tallyQuestions(){
    clearTimeout(quizTimeout);
    clearInterval(quizInterval);

    var answers = {
        correct: 0,
        incorrect: 0,
        unanswered: quiz.length,
    };
    $(".form-check-input").each(function(){
        if (this.checked && this.value === "correct") {
            answers.correct++;
            answers.unanswered--;
        }
        else if (this.checked && this.value === "incorrect") {
            answers.incorrect++;
            answers.unanswered--;
        }
    });
    Object.keys(answers).forEach(function(value){
        $("#" + value).text(answers[value]);
    });
    $("#game").attr("style", "display: none");
    $("#score").attr("style", "display: block");
}

// from https://stackoverflow.com/a/2450976/638877
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}
