function init() {
    const addButton = document.getElementById('addButton')
    addButton.addEventListener('click',addTask)
  
    }
    function addTask() {
     const liElement = document.createElement('li')
     const textInput = document.getElementById('todoInput')
     console.log(liElement)
     console.log(textInput)
     liElement.textContent = textInput.value
     const ulElement = document.getElementById('todoList')
     ulElement.appendChild(liElement)
      
    }
    init();