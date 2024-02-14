function addNewProduct() {
    const input = document.getElementById('product-input').value.trim();

    if (input.length === 0) {
        console.log('Input is empty');
        return;
    }

    const div = document.createElement('div');
    const pElement = document.createElement('p');
    const divlist = document.getElementById('product-list');
    const removeBtn = document.createElement('button');


    divlist.appendChild(div);
    div.setAttribute('class', 'product-item');
    div.setAttribute('id', input);
    div.appendChild(pElement);
    pElement.textContent = input;
    removeBtn.textContent = 'Remove';
    div.appendChild(removeBtn);

    removeBtn.addEventListener('click', function () {
        removeProduct(div);
    });
}

function removeProduct(div) {
    const divlist = document.getElementById('product-list');
    divlist.removeChild(div);
}

function removeAllProduct() {
    console.log('Remove All button clicked');
    const divProductlist = document.getElementById('product-list');
    divProductlist.innerHTML = '';
}

function registerEvent() {
    const add = document.getElementById('add-button');
    add.addEventListener('click', addNewProduct);

    const addRemoveAll = document.getElementById('removeAll-button');
    addRemoveAll.addEventListener('click', removeAllProduct);
}

registerEvent();
