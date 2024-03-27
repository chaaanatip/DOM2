function init() {
    const addbtn = document.getElementById('addButton')
    addbtn.addEventListener("click", addTask);
    }
    function addTask() {
    const liel = document.createElement('li')
    const ulel = document.getElementById('todoList')
    const input = document.getElementById('todoInput')
    valueinput = input.value
    liel.textContent = valueinput
    ulel.appendChild(liel)
    console.log(ulel)
    }
    init();