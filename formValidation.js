function formValidation() {
  const addEventHandler = () => {
    const save = document.getElementById("save")
    save.addEventListener("click", saveHandler)
    const reset = document.getElementById("reset")
    reset.addEventListener("click", resetHandler)
  }

  const saveHandler = () => {
    const name = document.getElementById("fullname").value
    const nameMsg = document.getElementById("nameValidateMsg")
    const body = document.querySelector("body")
    const feedback = document.getElementById("feedback").value
    const feedbackMsg = document.getElementById("feedbackValidateMsg")

    if (name === "") {
      nameMsg.textContent = "please enter your name"
    } else if (name !== "") {
      nameMsg.textContent = name
    }
    if (feedback === "") {
      feedbackMsg.textContent = "please enter your feedback"
    } else {
      feedbackMsg.textContent = feedback
    }
    console.log(body)
  }
  const resetHandler = () => {
    const feedbackMsg = document.getElementById("feedbackValidateMsg")
    const nameMsg = document.getElementById("nameValidateMsg")
    feedbackMsg.textContent = ""
    nameMsg.textContent = ""
  }

  return {
    addEventHandler,
  }
}

const { addEventHandler } = formValidation()
addEventHandler()
