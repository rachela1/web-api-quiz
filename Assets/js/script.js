var quizData = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        correct: "c",
    },
    {
        question: "The condition in an if / else statement is enclosed with____.",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        correct: "b",
    },
   {
        question: "Arrays in JavaScript can be used to store_____.",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        correct: "d",
   }, 
   {
        question: "String values must be enclosed within____ when being assigned to variables.",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        correct: "c",
   },
    {
        question: "A very useful too used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log",
        correct: "d",
    },
]

var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var aText = document.getElementById('aText')
var bText = document.getElementById('bText')
var cText = document.getElementById('cText')
var dText = document.getElementById('dText')

var currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    var currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a1Text.innerText = currentQuizData.a
    a2Text.innerText = currentQuizData.b
    a3Text.innerText = currentQuizData.c
    a4Text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    var answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

