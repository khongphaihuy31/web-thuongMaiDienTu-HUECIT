// tăng giảm số lượng sản phẩm mua
const down = document.querySelector(".down-js");
const up = document.querySelector(".up-js");
const showUpDown = document.querySelector(".input--quantity__show-js");


function Up(){
    var kq ;
    kq = Number(showUpDown.getAttribute("value"));
    kq++;
    showUpDown.setAttribute('value', kq + '');
}
up.addEventListener('click',Up);


function Down(){
    var kq;
    kq = Number(showUpDown.getAttribute("value"));
    if(kq > 1){
        kq--;
        showUpDown.setAttribute('value', kq + '');
    }else{
        showUpDown.setAttribute('value', kq + '');
    }
}
down.addEventListener('click' , Down);


// click show chi tiết sản phẩm mô tả sản phẩm
const containerBottom = document.querySelector('.container-bottom');
const detail = document.querySelector('.container-bottom__detail');
const describe = document.querySelector('.container-bottom__describe');

describe.addEventListener('click', () =>{
    containerBottom.classList.add('open-describe');
});

detail.addEventListener('click', () =>{
    containerBottom.classList.remove('open-describe');
});

// click thêm vào giỏ hàng và tăng số lượng ở giỏ hàng lên
const quantityProduct = document.querySelector('.header__cart-quantity-product');
const buyAdd = document.querySelector('.container__buy-add');

buyAdd.addEventListener('click', () => {
    var getQuantityProduct = Number(quantityProduct.innerHTML);
    var kq = getQuantityProduct + 1;
    quantityProduct.innerHTML = kq + '';
});



