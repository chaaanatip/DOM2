function init() {

    const title = document.createElement('title')
    title.textContent = 'Registration From'


    const head = document.getElementsByTagName('head')
    head[0].appendChild(title)
    console.log(head)

   
    
    const h2 = document.createElement('h2')


    const body = document.body
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')

    h2.textContent = 'Register'
    body.appendChild(h2)
    body.appendChild(div1)
    body.appendChild(div2)
    body.appendChild(div3)
    body.appendChild(div4)
    console.log(body)

    
    const label = document.createElement('label')
    label.setAttribute('for','name')
    label.textContent = ('Full Name:')


    const input = document.createElement('input')
    input.setAttribute('type','text')
    input.setAttribute('id','name')
    input.setAttribute('name','name')
    input.required = true;
 

    div1.appendChild(label)
    div1.appendChild(input)


    const label2 = document.createElement('label')
    label2.textContent = ('Email Address:')
    label2.for = "email"
    

    const input2 = document.createElement('input')
    input2.type = 'email'
    input2.id ='email'
    input2.name ='email'
    input2.required=true

    const button = document.createElement('button')
    button.type='submit'
    button.textContent = ('Register')
    div3.appendChild(button)
    button.addEventListener('click',showUserRegister)

    div2.appendChild(label2)
    div2.appendChild(input2)
    



    
    }
    function showUserRegister(){
    const input = document.getElementById('name')
    const input2 = document.getElementById('email')
    const pElement = document.createElement('p')

    const div = document.getElementsByTagName('div')
    

    pElement.textContent = `Full Name: ${input.value}, Email:${input2.value} `
  
    div[3].appendChild(pElement)
    console.log(pElement)


    }
    init();