function init() {
    const firstDiv = document.querySelectorAll('div')
    const input = document.createElement('input')
    const button = document.createElement('button')
    const secDiv = document.querySelectorAll('div')
    const ul = document.createElement('ul')
    
    ul.setAttribute('id','todoList')
    button.textContent = 'Add'
    input.setAttribute('type','text')
    input.setAttribute('placeholder','Enter new task')
    secDiv[1].appendChild(ul)
    firstDiv[0].appendChild(input)
    firstDiv[0].appendChild(button)
    console.log(input)
    console.log(firstDiv[0])
    console.log(secDiv[1])

    button.addEventListener('click',addTask)
    }
    function addTask() {
    const input = document.querySelector('input')
    const liElement = document.createElement('li')
    const ul = document.createElement('ul')
    const secDiv = document.querySelectorAll('div')

    secDiv[1].appendChild(ul)
    liElement.textContent = input.value
    ul.appendChild(liElement)
    console.log(liElement)
    }
    init();