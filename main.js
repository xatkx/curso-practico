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


let productList = [
    {
        name: 'bike',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 9200
    },
    {
        name: 'bike',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 1200
    },
    {
        name: 'iphone',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 90
    },
    {
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
    {
        name: 'sayayin',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 298700
    },{
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
    {
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
    {
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
    {
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
    {
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
    {
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
    {
        name: 'tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 200
    },
]

function productos(json){

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

productList.forEach( pro => {
    containerCard.appendChild(productos(pro))
} )


// for (const product of productList) {
// containerCard.appendChild(productos(product))
// }


