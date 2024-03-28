//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500095 Name:Chanatip Insoom

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js"

let randomQuiz

function init() {
  const newQuizBtn = document.createElement("button")
  newQuizBtn.textContent = "New Quiz"
  const clearQuizBtn = document.createElement("button")
  clearQuizBtn.textContent = "Clear Quiz"
  const divMenu = document.getElementById("menu")
  divMenu.appendChild(newQuizBtn)
  divMenu.appendChild(clearQuizBtn)

  newQuizBtn.addEventListener("click", generateQuiz)
  clearQuizBtn.addEventListener("click", clearQuiz)
}

function generateQuiz() {
  const body = document.getElementsByTagName("body")
  const randomQuiz = getRandomQuiz()
  const quizContainer = document.getElementById("quizContainer")

  const divQuestion = document.createElement("div")
  divQuestion.id = "question"

  body[0].appendChild(quizContainer)
  body[0].appendChild(divQuestion)

  const pElementQuestion = document.createElement("p")
  const pElementAns = document.createElement("p")

  pElementQuestion.textContent = randomQuiz.question
  pElementAns.textContent = randomQuiz.options
  divQuestion.appendChild(pElementQuestion)

  const button0 = document.createElement("button")
  const button1 = document.createElement("button")
  const button2 = document.createElement("button")
  const button3 = document.createElement("button")

  button0.textContent = randomQuiz.options[0]
  button1.textContent = randomQuiz.options[1]
  button2.textContent = randomQuiz.options[2]
  button3.textContent = randomQuiz.options[3]
  // button[0] = randomQuiz.options[0]
  divQuestion.appendChild(button0)
  divQuestion.appendChild(button1)
  divQuestion.appendChild(button2)
  divQuestion.appendChild(button3)

  quizContainer.appendChild(divQuestion)
  button0.addEventListener("click", function () {
    checkAnswer(ans)
  })
  button1.addEventListener("click", function () {
    checkAnswer(ans)
  })
  button2.addEventListener("click", function () {
    checkAnswer(ans)
  })
  button3.addEventListener("click", function () {
    checkAnswer(ans)
  })

  const ans = randomQuiz.answer

  console.log(randomQuiz.options[0])
  console.log(ans)
  console.log(randomQuiz)
  console.log(quizContainer)
  console.log(divQuestion.appendChild(button0))
}

function clearQuiz() {
  const quizRemove = document.getElementById("quizContainer")
  quizRemove.textContent = ""
}

function checkAnswer(e) {
  const btnQuestion = document.querySelectorAll("div#question>button")
  console.log(e)
  console.log(btnQuestion[0])
}

init()
