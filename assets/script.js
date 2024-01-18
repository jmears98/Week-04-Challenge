var startButtonContainer=document.querySelector(".start-btn-container")
var startButton=document.querySelector("#start-btn")
var timeRemaining=document.querySelector("#time-remaining")
var questionContainer=document.querySelector("#question-selector")
var question=document.querySelector("#question")
var answerOne=document.querySelector("#answer-1")
var answerTwo=document.querySelector("#answer-2")
var answerThree=document.querySelector("#answer-3")
var answerFour=document.querySelector("#answer-4")
var currentQuestion=0


startButton.addEventListener("click", startQuiz) 
var questionContainer = document.getElementById('question-container');

function startQuiz() {
    console.log("hello")
    questionContainer.style.display = "block";
    showQuestion()
};


var questions = [
    {
        question: "Which of the following compares if one OR the the other is true?",
        choice: ["&&", "[]", "||", "{}"],
        correct: "||",
    },
    {
        question:"what is the worst thing ever?",
        choice:["Undefined", "Object Object", "Error", ""],
        correct:"Object Object",
    }
]

console.log(questions[1].question)
var showQuestion=function () {
    var questionText = document.getElementById('question');
    questionText.textContent="I have changed";
    for (let i = 0; i < questions[currentQuestion].choice.length; i++) {
      console.log(questions[currentQuestion].choice[i])
      var answerButton=document.createElement("button")
    answerButton.textContent=questions[currentQuestion].choice[i]
    questionContainer.append(answerButton)
    
    }
    currentQuestion++
}

// var timeInterval = setInterval(function () {
//     if (timeRemaining > 1) {
//       timerEl.textContent = timeRemaining + ' seconds remaining';
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       timerEl.textContent = timeRemianing + ' second remaining';
//       timeLeft--;
//     } else if (timeleft === 0){
//      timerEl.textContent = timeRemaining + 'seconds remaining';
//     }
// })
