// menu desktop email
const emailMenu = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('#menudesktop1')

// menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuMobile = document.querySelector('#menuMobile');

// menu carrito
const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const product_detail = document.querySelector('.product-detail')


// card - container

const containerCard = document.querySelector('.cards-container')

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
        product_detail.classList.add('hidden')
    } else 
    {
        mobileMenu.classList.toggle('hidden')
    }
}
function productDetailF(event){
    if(!mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.add('hidden')
    }

    product_detail.classList.toggle('hidden')
}

// add venet listener
btnShoppingCart.addEventListener('click',productDetailF)
emailMenu.addEventListener('click',emailMenuF);
btnMenuMobile.addEventListener('click', mobileMenuF);


let productList = fetch('./dataBase.json').then( productos => {
    return productos.json()
}).then( list => {
    list.forEach( pro => {
        containerCard.appendChild(productListRender(pro))
    } )
})





function productListRender(json){

    let imgA = './icons/bt_add_to_cart.svg'

    let producto = document.createElement('div');
    producto.classList.add('product-card');

    let img = document.createElement('img');
    img.setAttribute('src',json.img)

    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    
    
    let price = document.createElement('p');
    price.innerText = json.price
    
    let name = document.createElement('p');
    name.innerText = json.name

    let div = document.createElement('div');
    div.appendChild(price);
    div.appendChild(name);

    let img2 = document.createElement('img');
    img2.setAttribute('src',imgA);
    img2.setAttribute('alt','kk');

    let figure = document.createElement('figure');
    figure.appendChild(img2);

    productInfo.appendChild(div)
    productInfo.appendChild(figure)

    producto.appendChild(img);
    producto.appendChild(productInfo);


    return producto

}

// for (const product of productList) {
// containerCard.appendChild(productos(product))
// }


