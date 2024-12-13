'use strict'

const $ = document.querySelector.bind(document);

document.getElementById('bars').addEventListener('click', ()=> {
    const navlist = document.querySelector('.nav_list');
    navlist.classList.toggle('visible');
});


let shopping_cart = JSON.parse(localStorage.getItem('shopping_cart')) || [];

const shoppingIcon = document.getElementById('shoppingIcon');

const count = document.getElementById('counting-items');

const cart_list = document.getElementById('item_list')


shoppingIcon.addEventListener('click',()=>{
    const add_items = document.querySelector('.add-items');
    add_items.classList.toggle('visible');
});

function addItem(product) {
    shopping_cart.push(product);
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
    updateCart();
}

function removeItem(product) {
    shopping_cart = shopping_cart.filter(item => item !== product);
    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));
    updateCart();
}

function updateCart() {
    count.textContent = shopping_cart.length;

    cart_list.innerHTML = shopping_cart.length > 0

        ? shopping_cart.map(item =>
                `<li>${item} <button onclick="removeItem('${item}')">Remove</button></li>`
        ).join('')
        :'<li>Your cart is empty.</li>';
}

const addButton = document.querySelectorAll('.arrival_item input, .seasonal_item input, .original_item input');
    
addButton.forEach(button => {

    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        addItem(product);
    });
    
});

updateCart();