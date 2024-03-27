import { memberManagement } from './data/members.js'
const { getMembers, findMember } = memberManagement()

//your student id, firstname, and lastname here
function memberForm() {
  const addEventHandler = () => {
    const button = document.getElementById('member')
    button.addEventListener('click',memberHandler)
  }

  const memberHandler = () => {
   const div = document.getElementById('searchMember')
   const p = document.createElement('p')
   p.textContent = 'Your Member Id:'
   const input = document.createElement('input')
   input.setAttribute('id','memberId')
   const button = document.createElement('button')
   button.textContent = 'search'
   div.appendChild(p)
   div.appendChild(input)
   div.appendChild(button)
   console.log(div)
   button.addEventListener('click',searchHandler)
  }

  const searchHandler = () => {
    const memberId = document.getElementById('memberId').value;
    const member = findMember(parseInt(memberId));
    const body = document.getElementsByTagName('body')


    const foundDiv = document.getElementById('foundMember');
    foundDiv.textContent = ''; 

    if (member) {
        const idParagraph = document.createElement('p');
        idParagraph.textContent = `ID: ${member.id}`;
        foundDiv.appendChild(idParagraph);
  
        const firstnameParagraph = document.createElement('p');
        firstnameParagraph.textContent = `Firstname: ${member.firstname}`;
        foundDiv.appendChild(firstnameParagraph);
  
        const lastnameParagraph = document.createElement('p');
        lastnameParagraph.textContent = `Lastname: ${member.lastname}`;
        foundDiv.appendChild(lastnameParagraph);
  
        const emailParagraph = document.createElement('p');
        emailParagraph.textContent = `Email: ${member.email}`;
        foundDiv.appendChild(emailParagraph);
  
        const addressParagraph = document.createElement('p');
        addressParagraph.textContent = `Address: ${member.address}`;
        foundDiv.appendChild(addressParagraph);
      } else {
        foundDiv.textContent = '';
      }
      console.log(body[0])
    };


  return {
    addEventHandler
  }
}

const { addEventHandler } = memberForm()
addEventHandler()