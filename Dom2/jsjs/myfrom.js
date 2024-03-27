function init() {
    const title = document.createElement("title")
    const head = document.getElementsByTagName('head')
    title.textContent = "Registration Form"
    head[0].appendChild(title)

    const div1 = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.textContent = "Register"
    const body = document.getElementsByTagName('body')
    body[0].appendChild(h2)
    body[0].appendChild(div1)
    console.log(body[0])
    const label1 = document.createElement('label')
    div1.appendChild(label1)
    label1.setAttribute('for','name')
    label1.textContent = "Full Name"
    const input1 = document.createElement('input')
    div1.appendChild(input1)
    input1.setAttribute('type','text')
    input1.setAttribute('id','name')
    input1.setAttribute('name','name')
    input1.setAttribute('required','')

    const div2 = document.createElement('div')
    body[0].appendChild(div2)
    const label2 = document.createElement('label')
    label2.setAttribute('for','email')
    label2.textContent = "Email Address:"
    div2.appendChild(label2)
    const input2 = document.createElement('input')
    input2.setAttribute('type','email')
    input2.setAttribute('id','email')
    input2.setAttribute('name','email')
    input2.setAttribute('required','')
    div2.appendChild(input2)

    const div3 = document.createElement('div')
    body[0].appendChild(div3)
    const button = document.createElement('button')
    button.setAttribute('type','submit')
    button.textContent = 'Register'
    div3.appendChild(button)

    const div4 = document.createElement('div')
    body[0].appendChild(div4)

    button.addEventListener('click',showUserRegister)



    
    
    
    }
    function showUserRegister(){
    const pel = document.createElement('p')
    const pel2 = document.createElement('p')
    const div4 = document.getElementsByTagName('div')
    const input1 = document.getElementsByTagName('input')
    const input2 = document.getElementsByTagName('input')

    value = input1[0].value
    value2 = input2[1].value
    
    div4[3].appendChild(pel)
    div4[3].appendChild(pel2)
    pel.textContent = value
    pel2.textContent = value2


    }
    init();