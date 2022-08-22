// menu desktop email
const emailMenu = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('#menudesktop1')

// menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuMobile = document.querySelector('#menuMobile');

// menu carrito
const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const product_detail = document.querySelector('.product-detail')

//funciones
function emailMenuF(event) {
    console.log()
    if(menuDesktop.classList.contains('hidden')){
        menuDesktop.classList.remove('hidden')
    } else {
        menuDesktop.classList.toggle('hidden')
    }
}

function mobileMenuF(event){
    if(mobileMenu.classList.contains('hidden'))
    {
        mobileMenu.classList.remove('hidden')
    } else 
    {
        mobileMenu.classList.toggle('hidden')
    }
}
function productDetailF(event){
    product_detail.classList.toggle('hidden')
}

// add venet listener
btnShoppingCart.addEventListener('click',productDetailF)
emailMenu.addEventListener('click',emailMenuF);
btnMenuMobile.addEventListener('click', mobileMenuF);