import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems
  const initialPage = () => {
    const inputElement = document.querySelector('input')
    console.log(inputElement)
    inputElement.addEventListener('input',filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    // console.log(event.target)
    // console.log(event.target.value)
    const userKeywords = event.target.value.toLowerCase()
    const filterItems = items.filter((item)=>{
      item.keywords.toLowerCase().includes(userKeywords)
    })
    showItems(filterItems)
  }

  const showItems = (items) => {
    const ulElement = document.getElementById('items')
    //remove ul children
    ulElement.textContent=''
    //create li elements
    items.forEach((item)=> {
      const liElement = document.createElement('li')
    liElement.textContent=`ID:${item.id}, NAME:${item.name}, KEYWORD:${item.keywords}`
  ulElement.appendChild(liElement)})

    

  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

export { itemList }
const { initialPage } = itemList(products)
initialPage()
