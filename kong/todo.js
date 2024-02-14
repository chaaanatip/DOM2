    function init(){
    const boxbox = document.getElementsByClassName('addButton')
    boxbox[0].addEventListener('click',addTask)
}
function addTask() {
    const acessul = document.getElementById('todoList')
    const revval = document.getElementsByClassName('todoInput')
    const createLi = document.createElement('li')
    createLi.textContent = revval[0].value
    acessul.appendChild(createLi)
}

init();