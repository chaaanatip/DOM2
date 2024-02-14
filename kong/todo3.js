function init() {
    const PoomAdd = document.querySelector("div button")
    PoomAdd.addEventListener('click',addTask)
}
function addTask() {
    const acessUl = document.querySelector('div  ul')
    const acessBox = document.querySelector('div input')
    const createLi = document.createElement('li')
    createLi.textContent = acessBox.value
    acessUl.appendChild(createLi)

}

init();