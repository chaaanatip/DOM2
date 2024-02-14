function init () {
    const acessBt = document.querySelector('div button')
    acessBt.addEventListener('click',addTask)
}

function addTask() {
    const acessUl = document.querySelector('div  ul')
    const acessBox = document.querySelector('div input')
    const createLi = document.createElement('li')
    createLi.textContent = acessBox.value
    acessUl.appendChild(createLi)
}

init();