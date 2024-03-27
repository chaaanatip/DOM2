function init() {
    const addbtn = document.getElementsByClassName('addButton')
    addbtn[0].addEventListener('click',addTask)
    }
    function addTask() {
    const liel = document.createElement('li')
    const input = document.getElementsByClassName('todoInput')
    const ulel = document.getElementById('todoList')
    value = input[0].value
    liel.textContent = value
    ulel.appendChild(liel)
    }
    init();