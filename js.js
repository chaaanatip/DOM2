import { quizQuestions, getRandomQuiz } from "./quizQuestions.js"

let randomQuiz

function init() {
  console.log("init started1")
  //insert your code here
  const buttonArea = document.getElementById("menu")
  const br = document.createElement("br")

  //new
  const newQbtn = document.createElement("button")
  newQbtn.setAttribute("id", "newB")
  newQbtn.textContent = "New Quiz"
  newQbtn.addEventListener("click", () => {
    generateQuiz()
  })

  //   //clear
  const ClearQbtn = document.createElement("button")
  ClearQbtn.setAttribute("id", "clearB")
  ClearQbtn.textContent = "Clear Quiz"
  ClearQbtn.addEventListener("click", () => {
    clearQuiz()
  })

  //   //combined
  buttonArea.appendChild(newQbtn)
  buttonArea.appendChild(ClearQbtn)
}

function generateQuiz() {
  clearQuiz()
  //console.log('generateQuiz')
  const qArea = document.getElementById("quizContainer")
  let selected = []
  //insert your code here
  const jod = getRandomQuiz()

  const quiz1 = document.createElement("div")
  quiz1.setAttribute("id", "question")
  quiz1.textContent = `${jod.question}`

  qArea.appendChild(quiz1)

  const br = document.createElement("br")

  const op1 = document.createElement("button")
  op1.setAttribute("style", "margin : 5px")
  const op2 = document.createElement("button")
  op2.setAttribute("style", "margin : 5px")
  const op3 = document.createElement("button")
  op3.setAttribute("style", "margin : 5px")
  const op4 = document.createElement("button")
  op4.setAttribute("style", "margin : 5px")

  const options = jod.options
  const answer = jod.answer

  options.forEach((option, index) => {
    const opButton = document.createElement("button")
    opButton.setAttribute("style", "margin: 5px")
    opButton.textContent = option

    opButton.addEventListener("click", () => {
      const selected = opButton.textContent
      console.log(selected)
      console.log(answer)

      if (selected === answer) {
        checkAnswer(1)
      } else {
        checkAnswer(0)
      }
    })

    quiz1.appendChild(opButton)
  })

  return selected, answer
}

function clearQuiz() {
  console.log("clearQuiz")
  //insert your code here
  const qArea = document.getElementById("quizContainer")
  qArea.textContent = ""
  const showResult = document.querySelectorAll("div")[2]
  showResult.textContent = ""
}

function checkAnswer(e) {
  //insert your code here

  const showResult = document.querySelectorAll("div")[3]
  const op1 = document.createElement("button")

  showResult.appendChild(op1)
  if (e === 1) {
    showResult.textContent = "Correct"
  } else showResult.textContent = "Incorrect"
}

init()
