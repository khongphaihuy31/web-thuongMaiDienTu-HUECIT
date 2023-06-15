const all = document.querySelector('.js-product-all');
const allLink = document.querySelector('.js-product-all-link');
const allID = document.querySelector('#js-product-all-id');

// function showProductAll(){
//     all.classList.add('open__product-item');
// }

// function offProductAll(){
//     all.classList.remove('open__product-item');
// }

function onClickAll(){
    const hasOpen = allID.classList.contains('open__product-item');
    if(hasOpen){
        all.classList.remove('open__product-item');
    }
    else{
        all.classList.add('open__product-item');
    }
}
allLink.addEventListener('click', onClickAll);

// trademark
const trademark = document.querySelector('.js-product-trademark');
const trademarkLink = document.querySelector('.js-product-trademark-link');
const trademarkID = document.querySelector('#js-product-trademark-id');

function onClickTrademark(){
    const hasOpen = trademarkID.classList.contains('open__product-item');
    if(hasOpen){
        trademark.classList.remove('open__product-item');
    }
    else{
        trademark.classList.add('open__product-item');
    }
}

trademarkLink.addEventListener('click' , onClickTrademark);

// men
const men = document.querySelector('.js-product-men');
const menLink = document.querySelector('.js-product-men-link');
const menID = document.querySelector('#js-product-men-id');

function onClickMen(){
    const hasOpen = menID.classList.contains('open__product-item');
    if(hasOpen){
        men.classList.remove('open__product-item');
    }
    else{
        men.classList.add('open__product-item');
    }
}

menLink.addEventListener('click' , onClickMen);

// women
const women = document.querySelector('.js-product-women');
const womenLink = document.querySelector('.js-product-women-link');
const womenID = document.querySelector('#js-product-women-id');

function onClickWomen(){
    const hasOpen = womenID.classList.contains('open__product-item');
    if(hasOpen){
        women.classList.remove('open__product-item');
    }
    else{
        women.classList.add('open__product-item');
    }
}

womenLink.addEventListener('click' , onClickWomen);

// children
const children = document.querySelector('.js-product-children');
const childrenLink = document.querySelector('.js-product-children-link');
const childrenID = document.querySelector('#js-product-children-id');

function onClickChildren(){
    const hasOpen = childrenID.classList.contains('open__product-item');
    if(hasOpen){
        children.classList.remove('open__product-item');
    }
    else{
        children.classList.add('open__product-item');
    }
}

childrenLink.addEventListener('click' , onClickChildren);

// sale
const sale = document.querySelector('.js-product-sale');
const saleLink = document.querySelector('.js-product-sale-link');
const saleID = document.querySelector('#js-product-sale-id');

function onClickSale(){
    const hasOpen = saleID.classList.contains('open__product-item');
    if(hasOpen){
        sale.classList.remove('open__product-item');
    }
    else{
        sale.classList.add('open__product-item');
    }
}

saleLink.addEventListener('click' , onClickSale);


