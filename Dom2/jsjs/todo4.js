function init() {
    const div = document.getElementsByTagName('div')
    const input = document.createElement('input')
    const button = document.createElement('button')
    button.textContent = ('Add')
    
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter a new task');
    div[0].appendChild(input)
    div[0].appendChild(button)
    console.log(div[1])


    const ulel = document.createElement('ul')
    ulel.setAttribute('id','todoList')
    div[1].appendChild(ulel)
    button.addEventListener('click',addTask)

    }
    function addTask() {
    const liel = document.createElement('li')
    const input = document.getElementsByTagName('input')
    const ulel = document.getElementById('todoList')
    value = input[0].value
    liel.textContent = value
    ulel.appendChild(liel)
    

    }
    init();