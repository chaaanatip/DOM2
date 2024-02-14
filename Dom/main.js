// const divElement = document.getElementsByTagName('div')
// console.log(divElement[1])

// const divV1Children = divElement[1].children
// console.log(divV1Children)

// Array.from(divV1Children).forEach(element => {
//     console.log(element)
// });

const divElementV2 = document.querySelectorAll('div')
console.log(
    Array.from(divElementV2[1].children).forEach((element)=> {
        console.log(element)
    })
    )

const divElementV3 = document.querySelector('div.faculty')
console.log(divElementV3)

const divElementV4 = document.querySelector('div#div-faculty')
console.log(divElementV4)

Array.from(divElementV4.children).forEach((element)=> {
        console.log(element)
    })
    
const pElements = document.querySelectorAll('div.faculty>p')
console.log(pElements)
    pElements.forEach((element)=>{
        console.log(element)
    })

const coursesElement = document.getElementById('courses')
console.log(coursesElement)

const lecturereElements = document.getElementsByClassName('lecturer')
console.log(lecturereElements)

const btnElment = document.getElementsByTagName('button')
console.log(btnElment)

const liElement = document.getElementById('courses')
console.log(liElement.children)

const firstli = document.getElementById('courses')
console.log(firstli.children[0])

console.log(coursesElement.firstElementChild)