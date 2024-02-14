function formValidation() {
  const addEventHandler = () => {
  const  savebtn = document.getElementById('save')
  const  resetbtn = document.getElementById('reset')
  savebtn.addEventListener('click',saveHandler)
  resetbtn.addEventListener('click',resetHandler)
  }

  const saveHandler = () => {
  const  fullNameElement = document.getElementById('fullname')
  const  feedbackElement = document.getElementById('feedback')

  const pNameMsg=document.getElementById('nameValidateMsg')
  pNameMsg.textContent = 'please enter your name'
  const pfeedbackMsg=document.getElementById('feedbackValidateMsg')
      pfeedbackMsg.textContent = 'please enter your name'
    if(fullNameElement.value.trim().length===0){
    } else pNameMsg.textContent=''
    if(feedbackElement.value.trim().length===0){
      } else pfeedbackMsg.textContent=''
  // console.log(fullNameElement.value)
  // console.log(feedbackElement.value)
  }
  const resetHandler = () => {
    const  fullNameElement = document.getElementById('fullname')
    const  feedbackElement = document.getElementById('feedback')
    fullNameElement.value=''
    feedbackElement.value=''
  }

  return {
    addEventHandler
  }
}

const { addEventHandler } = formValidation()
addEventHandler()
