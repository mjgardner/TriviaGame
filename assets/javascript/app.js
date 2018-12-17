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
    }
];

$(document).ready(function(){
    $("#start").click(function(){
        $("#start-row").addClass("invisible");
        $("#game").removeClass("invisible");
        displayQuestions();
        startTimer();
    });
});

function displayQuestions(){
    quiz.forEach(function(questionObj, questionIndex){
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

        Object.keys(answers).forEach(function(answer, answerIndex){
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

}