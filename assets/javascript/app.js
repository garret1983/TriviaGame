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
        //console.log("hi");



    });

    var number = 20;
    $("#timeLeft").on("click", run);

    function decrement() {
        number--;
        $("#timeLeft").html("<h2>" + number + " seconds" + "</h2>");
        if (number === 0) {
            stop();
            alert('times up!');
        }

    }

    function run() {
        counter = setInterval(decrement, 1000);
        buildQuestions()
    }

    function stop() {
        clearInterval(counter);
    }

    run();

    function formTemplate(data) {

        var qString = "<form id='questions'>" + data.question + "<br>";

        var possibles = data.possibles;

        for (var i = 0; i < possibles.length; i++) {
            var possible = possibles[i];
            //console.log(possible);
            qString = qString + "<input type='radio' name='" + data.id + "' value=" + i + ">" + possible;
        }

        return qString + "</form>";
    }

    window.formTemplate = formTemplate;


    function buildQuestions() {
        var questionsHTML = ''
        for (var i = 0; i < game.questions.length; i++) {
            questionsHTML = questionsHTML + formTemplate(game.questions[i]);
        }
        $('#questions-container').append(questionsHTML);

    }

    function getAnswer(question) {
        return $('input[name=' + question.id + ']:checked').val();
        //var isCorrect = answer == question.answer //  .eq(questions.answer);
        //var isChecked = correct.is(':checked');
        //return isCorrect;
    }

    function resultsTemplate(questions) {
        var htmlBlock = '<div>'
        htmlBlock = htmlBlock + questions.question + ': ' + isChecked;
        return htmlBlock + "</div>";
    }

    function checkAnswers() {
        var resultHTML = '';
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered = 0;

        for (var i = 0; i < game.questions.length; i++) {
            /* if (isCorrect(game.questions[i])) {
                correct++;
            }  */
            // un - 0, cor - 1, in - 2
            var answer = getAnswer(game.questions[i])
            if (answer == game.questions[i].answer) {
                correct++;
            }
            else if (answer != game.questions[i].answer && answer != undefined) {
                incorrect++;
            }
            else {
                unAnswered++;
            }

        }
        $('.results').html('correct: ' + correct + "<br>" + 'incorrect: ' + incorrect + "<br>" + 'unanswered: ' + unAnswered);

    }
    // havnt finished function, lots of errors. 
    function checkAnswered() {
        var anyAnswers = false;
        var answers = $('[name=' + game.questions[0].question + ']');
        var answers = $('[name=' + game.questions[1].question + ']');
        var answers = $('[name=' + game.questions[2].question + ']');
        var answers = $('[name=' + game.questions[3].question + ']');
        var answers = $('[name=' + game.questions[4].question + ']');

        for (var i = 0; i < answers.length; i++) {
            if (answeres[i].checked) {
                anyAnswered = true;
            }
        }
        return anyAnswered;
    }

    $("#doneButton").on("click", function () {
        checkAnswers();
        //checkAnswered();
        $("questions_container").hide();
        //show results
        stop();
        $("#messageDiv").html("Game Over!");
    });
})


//need to add elemnt.html - jquery 

