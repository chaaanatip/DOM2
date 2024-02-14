function init() { 
    //your code here 
    const posttbt = document.querySelector('div button')
    posttbt.addEventListener('click',showUserRegister)
    } 
    function showUserRegister(){ 
    //your code here
    const acessName = document.getElementById('name')
    const acessEmail = document.getElementById('email')
    const acessDivlast = document.getElementsByTagName('div')[3]
    const createTagP = document.createElement('p')
    createTagP.textContent = `Fullname : ${acessName.value} , Email : ${acessEmail.value} `
    ///////////////////////////////////////////////////////////////
    const createdeleteButton = document.createElement('button')
    createdeleteButton.textContent = 'Delete'
    createdeleteButton.setAttribute('id','namee')
    createdeleteButton.addEventListener('click', deleteUser)
    acessDivlast.appendChild(createTagP) 
    acessDivlast.appendChild(createdeleteButton)
} 

function deleteUser() {
    const divDel = document.getElementsByTagName('div')[3]
    const del = document.querySelector('div p')
    const delButton = document.getElementById('namee')
    divDel.removeChild(del)
    divDel.removeChild(delButton)
}

function deleteAll() {
    
}
init();  