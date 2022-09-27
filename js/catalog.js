"use strict"
const totalBasketPrice = document.querySelector('.basketTotalValue');
const basketButton = document.querySelector('.basket');
const basketTotalEl = document.querySelector('.basketTotal');
document.querySelector('.header-right-item-cart')
    .addEventListener('click', () =>{
    basketButton.classList.toggle('hidden');
})

const basket = {}

document.querySelector('.catalog-products-board')
    .addEventListener('click', ({target}) => {
        if (!target.closest('.addToCart')) {
            return
        }
        const productItem = target.closest('.product-item');
        const id = +productItem.dataset.id;
        const name = productItem.dataset.name;
        const price = +productItem.dataset.price;
        addToCart(id, name, price);
    });

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {id, name, price, count: 0};
    }
    basket[id].count++;
    totalBasketPrice.innerHTML = getTotalBasketPrice();
    renderBasketItem(id);
}

function getTotalBasketPrice() {
    return Object.values(basket)
        .reduce((acc, product) => acc + product.count * product.price, 0);
}

function renderBasketItem(id) {
    const basketRowEl = basketButton
        .querySelector(`.basketRow[data-productId="${id}"]`);
    if (!basketRowEl) {
        renderBasketRow(id);
        return;
    }
    basketRowEl.querySelector('.prodCount')
        .innerHTML = basket[id].count;
    basketRowEl.querySelector('.prodTotal')
        .innerHTML = basket[id].count * basket[id].price;
}

function renderBasketRow(prodId) {
   const productRow = `
        <div class="basketRow" data-productId="${prodId}">
            <div class="">${basket[prodId].name}</div>
            <div class="prodCount">${basket[prodId].count}</div>
            <div class="">${basket[prodId].price}</div>
            <div class="prodTotal">${basket[prodId].count 
   * basket[prodId].price}</div>
        </div>`
   basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}


// function renderBasket() {
//     const block = document.querySelector('.basket');
//     for (let item in basket) {
//         block.insertAdjacentHTML('beforeend', renderRow(item));
// }}
//
// function renderRow(item) {
//         return `<div class="basketRow">
//             <div class="">${item.name}</div>
//             <div class="">${item.count}</div>
//             <div class="">${item.price}</div>
//             <div class="">${item.count * item.price}</div>
//         </div>`
// }


// class Basket {
//     constructor(basketBlock= '.basketRow') {
//         this.basketBlock = basketBlock;
//         this.items = {};
//         this.addToBasket();
//         this.renderBasket();
//     }
//     addToBasket() {
//         document.querySelector('.catalog-products-board')
//             .addEventListener('click', ({target}) => {
//                 if (!target.classList.contains('addToCart')) {
//                     return
//                 }
//                 const key = target.parentNode.parentNode.dataset.id;
//                 if (!basket.hasOwnProperty(
//                     [target.parentNode.parentNode.dataset.id])) {
//                     this.items[`${key}`] =
//                         {id: target.parentNode.parentNode.dataset.id,
//                             name: target.parentNode.parentNode.dataset.name,
//                             price: target.parentNode.parentNode.dataset.price,
//                             count: 1}
//                 } else {
//                     this.items[`${key}`].count += 1;
//                 }
//                 console.log(this.items);
//             });
//         this.renderBasket();
//     }
//
//     renderBasket() {
//         const block = document.querySelector(this.basketBlock);
//         for (let item in this.items) {
//             const item = new basketRow(elem);
//             block.insertAdjacentHTML('afterend', elem.renderRow());
//         }
//     }
// }
//
// class basketRow {
//     constructor(item) {
//         this.id = item.id;
//         this.name = item.name;
//         this.price = item.price;
//         this.quantity = item.quantity;
//     }
//     getTotalItemPrice() {
//         return this.price * this.quantity;
//     }
//     renderRow() {
//         return `<div class="basketRow">
//             <div class="">${this.name}</div>
//             <div class="">${this.quantity}</div>
//             <div class="">${this.price}</div>
//             <div class="">${this.getTotalItemPrice()}</div>
//         </div>`
//     }
// }
//
// let basket = new Basket();