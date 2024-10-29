// navbar me funcnality add for menu toggle button.
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')                //css list 252.
    
// window on scroll use. 
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// cartItme me funcnality add for item toggle button.

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active')             // css list 174.

// window on scroll use. 
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// search option me funcnality add for search toggle button.

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')             // css list 142.

// window on scroll use. 
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// window on scroll use. 
// hamne is liye kiya kyuki teeno option ek saath open na ho.
// example: navbar,searchBar,shoppingBar.

window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}