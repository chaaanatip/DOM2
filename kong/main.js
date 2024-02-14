

function addNewProduct() {
    const boxInput = document.getElementById('product-input').value.trim()
    const acessPl = document.getElementById('product-list')
    ///
    const createDiv = document.createElement('div')
    createDiv.setAttribute('id', boxInput)
    createDiv.setAttribute('class', 'product-item')
    ///
    const createP = document.createElement('p')
    createP.textContent = boxInput
    ///
    const createButton = document.createElement('button')
    createButton.setAttribute('id',boxInput)
    createButton.setAttribute('class','deleteOne')
    createButton.textContent = 'Delete'
    ////
    acessPl.appendChild(createDiv)
    createDiv.appendChild(createP)
    createDiv.appendChild(createButton)
    ///
    const addRemove = document.getElementById(boxInput)
    addRemove.addEventListener('click', () => {
        removeProduct(boxInput)
    })

}


function removeProduct(productId) {
    const acessDivpdl = document.getElementById('product-list')
    const acessDivForDelete = document.getElementById(productId)
    acessDivpdl.removeChild(acessDivForDelete)

}


function removeAllProduct() {
    const divProductlist = document.getElementById('product-list')
    divProductlist.textContent = ''

}

function registerEvent() {
    const addButton = document.getElementById('add-button')
    addButton.addEventListener('click', addNewProduct)
    const addRemoveAll = document.getElementById('removeAll-button')
    addRemoveAll.addEventListener('click', removeAllProduct)
}

registerEvent()
