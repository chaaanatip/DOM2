    const boxck = document.getElementById('addButton')
function init() {
       boxck.addEventListener('click',addTask)
}
function addTask(){
    const acessUl = document.getElementById('todoList')
    const textb = document.getElementById('todoInput')
    const creli = document.createElement('li')
    creli.textContent = textb.value
    acessUl.appendChild(creli)

}
init();
