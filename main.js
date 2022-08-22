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

// product list

const cards = document.querySelectorAll('product-card')

//funciones
function emailMenuF(event) {
    console.log()
    if (menuDesktop.classList.contains('hidden')) {
        menuDesktop.classList.remove('hidden')
    } else {
        menuDesktop.classList.toggle('hidden')
    }
}

function mobileMenuF(event) {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden')
        product_detail.classList.add('hidden')
    } else {
        mobileMenu.classList.toggle('hidden')
    }
}
function productDetailF(event) {
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden')
    }

    product_detail.classList.toggle('hidden')
}

// add venet listener
btnShoppingCart.addEventListener('click', productDetailF)
emailMenu.addEventListener('click', emailMenuF);
btnMenuMobile.addEventListener('click', mobileMenuF);


let productList = fetch('./dataBase.json').then(productos => {
    return productos.json()
}).then(list => {
    list.forEach(pro => {
        containerCard.appendChild(productListRender(pro))
        return pro
    })
}).then(prolist => {
    cards.forEach( unico => {
        unico.addEventListener('click',producto =>{

            console.log('hola')
        })
    })
})



// renders html

function productListRender(json) {

    let imgA = './icons/bt_add_to_cart.svg'

    let producto = document.createElement('div');
    producto.classList.add('product-card');
    producto.setAttribute('id',json.id);

    let img = document.createElement('img');
    img.setAttribute('src', json.img)

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
    img2.setAttribute('src', imgA);
    img2.setAttribute('alt', 'kk');

    let figure = document.createElement('figure');
    figure.appendChild(img2);

    productInfo.appendChild(div)
    productInfo.appendChild(figure)

    producto.appendChild(img);
    producto.appendChild(productInfo);


    return producto

}



/*
<aside class="product-detail-2">
                <div class="product-detail-close">
                  <img src="./icons/icon_close.png" alt="close">
                </div>



                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">



                <div class="product-info-2">
                  <p>$35,00</p>
                  <p>Bike</p>
                  <p>With its practical position, </p>
                  <button class="primary-button add-to-cart-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                    Add to cart
                  </button>
                </div>
</aside>
*/






function SoloRender(json) {

    let imgClose = './icons/icon_close.png'
    let imgAddCard = './icons/bt_add_to_cart.svg'



    let asideProducto = document.createElement('aside');
    asideProducto.classList.add('product-card-2');

    // produc close

    let productClose = document.createElement('div');
    productClose.classList.add('product-detail-close')

    let imgCloseR = document.createElement('img');
    imgCloseR.setAttribute('src', imgClose);

    productClose.appendChild(imgCloseR)

    // img

    let asideImg = document.createElement('img');
    asideImg.setAttribute('src', json.img)
    asideImg.setAttribute('alt', json.name)

    //------

    /**** */
    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info-2');



    let price = document.createElement('p');
    price.innerText = json.price
    let name = document.createElement('p');
    name.innerText = json.name
    let detail = document.createElement('p');
    detail.innerText = json.details

    let imgAdd = document.createElement('img')
    imgAdd.setAttribute('src', imgAddCard);
    imgAdd.setAttribute('alt', 'add');
    let btnAdd = document.createElement('button');
    btnAdd.appendChild(imgAdd)

    // let div = document.createElement('div');

    productInfo.appendChild(price);
    productInfo.appendChild(name);
    productInfo.appendChild(detail);
    productInfo.appendChild(btnAdd);
    /*             */

    asideProducto.appendChild(productClose);
    asideProducto.appendChild(img);
    asideProducto.appendChild(productInfo);


    return asideProducto


}

// for (const product of productList) {
// containerCard.appendChild(productos(product))
// }


