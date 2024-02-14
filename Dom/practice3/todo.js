function init() {
    const addButton = document.getElementsByTagName('button')
    addButton[0].addEventListener('click',addTask)
    }
    function addTask() {
    const liElement = document.createElement('li')
    const ulElement = document.getElementById('todoList')
    const input = document.getElementsByTagName('input')
    liElement.textContent = input[0].value
    ulElement.append(liElement)
    }
    init();