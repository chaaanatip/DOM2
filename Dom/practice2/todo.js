function init() {
    const addButton = document.getElementsByClassName('addButton')
    addButton[0].addEventListener('click',addTask)
    }
    function addTask() {
    const liElement = document.createElement('li')
    const textInput = document.getElementsByClassName('todoInput')
    const ulElement = document.getElementById('todoList')
    console.log(textInput)
    liElement.textContent = textInput[0].value
    
    ulElement.appendChild(liElement)
    }
    init();