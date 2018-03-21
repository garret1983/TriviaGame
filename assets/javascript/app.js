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
})

var message = "Game Over! Please Play Again!";

$("startGame").on("click", function () {
    $("wrapper").show();
    console.log(test);

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