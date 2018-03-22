$(document).ready(function () {
    var game = {
        questions: [
            {
                question: "What is the capital of California?",
                possibles: ["Sacramento", "Los Angeles", "San Diego", "San Fransisco"],
                id: 'question-one',
                answer: 0
            }, {
                question: "What Baseball Team Plays In San Diego?",
                possibles: ["Dodgers", "Angels", "Padres", "Pirates"],
                id: 'question-two',
                answer: 2
            }, {
                question: "what county is Big Bear in?",
                possibles: ["Riverside", "San Bernardino", "Ventura", "Imperial"],
                id: 'question-three',
                answer: 1
            }, {
                question: "What Car Company Makes The Accord",
                possibles: ["Toyota", "Kia", "Ford", "Honda"],
                id: 'question-four',
                answer: 3
            }, {
                question: "Who Makes the iPhone?",
                possibles: ["Samsung", "Apple", "Nokia", "Google"],
                id: 'question-five',
                answer: 1
            },
        ]
    }


var message = "Game Over! Please Play Again!";

$(".startGame").on("click", function () {
    $(".wrapper").show();
    console.log("hi");

    $(this).hide();

});

var number = 15;
$("#timeLeft").on("click", run);

function decrement() {
    number--;
    $("#timeLeft").html("<h2>" + number + " seconds" + "</h2>");
    if (number === 0) {
        stop();
        $("#message").html("time up!");
        checkAnswers();
    }

}

function run() {
    counter = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(counter);
}

run();

function formTemplate(data) {

    var qString = "<form id='questionOne'>" + data.question + "<br>";

    var possibles = data.possibles;

    for (var i = 0; i < possibles.length; i++) {
        var possible = possibles[i];
        console.log(possible);
        qString = qString + "<input type='radio' name='" + data.id + "' value=" + i + ">" + possible;
    }

    return qString + "</form";
}



function checkAnswers() {

    var resultHTML = '';
    var guessedAnswers = [];
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;

    for (var i = 0; i < game.questions.length; i++) {
        if (isCorrect(game.questions[i])) {
            correct++;
        } else {
            if (checkedAnswered(game.questions[i])) {
                incorrect++
            } else {
                unanswered++;
            }
        }
    }
    $('.results').html('correct: ' + correct + "<br>" + 'incorrect: ' + incorrect + "<br>" + 'unanswered: ' + unAnswered);

}
// havnt finished function, lots of errors. 
function checkAnswered() {
    var anyAnswered = false;
    var answers = $('[name=' + game.questions[0].question+ ']');
    var answers = $('[name=' + game.questions[1].question+ ']');
    var answers = $('[name=' + game.questions[2].question+ ']');
    var answers = $('[name=' + game.questions[3].question+ ']');
    var answers = $('[name=' + game.questions[4].question+ ']');

    for (var i = 0; i < answers.length; i++) {
        if (answeres[i].checked) {
            anyAnswered = true;
        }
    }
    return anyAnswered;
}

$("#doneButton").on("click", function () {
    // checkAnswered();
    stop();
    $("#messageDiv").html("Game Over!");

});
})


//need to add elemnt.html - jquery 

