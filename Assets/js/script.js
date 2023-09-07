var startEl = document.getElementById('#start')
var finishEl = document.getElementById('#finish')

var quizEl = document.getElementById('#quiz')
var answerEls = document.querySelectorAll('#answer')
var questionsEl = document.getElementById('#questions')
var aText = document.getElementById('#aText')
var bText = document.getElementById('#bText')
var cText = document.getElementById('#cText')
var dText = document.getElementById('#dText')
var timerEl = document.getElementById('#timer')


function setView(view) {
    startEl.style.display = view === "START" ? null : "none";
    quizEl.style.display = view === "QUIZ" ? null : "none";
    finishEl.style.display = view === "FINISH" ? null : "none";
};

function.init() {
    timerEl.textContent = state.timeRemaining;
}

function buildQuestion() {
    var question = state.questions[questionIndex];
    questionsEl.innerHTML = null;
    console.log(question)
    for {
        (var choice of question.choices)
}
var buttonEl = document.createElement();
buttonEl.textContent = choice;
}



init();