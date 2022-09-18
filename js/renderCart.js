"use strict";

const products = [
    {id: 1, title: 'jacket', image: '/img/featured-1.png',color: 'blue',
        size: 'M', price: 500},
    {id: 2, title: 'suit', image: '/img/featured-2.png',color: 'red',
        size: 'L', price: 300},
    {id: 3, title: 'sweater', image: '/img/featured-3.png',color: 'yellow',
        size: 'XL', price: 400},
    {id: 4, title: 'pants', image: '/img/featured-4.png',color: 'gray',
        size: 'S', price: 600},
];
/**
 * Функция отрисовывает карточку товара
 * @param {object}  item - объект с данными о товаре
 * @returns - верстка карточки товара
 */
const renderProduct = item => {
    return `<div class="purchase-item">
        <img src="${item.image}" alt="cart-item"
             class="purchase-item-img">
            <div class="purchase-item-txt">
                <a href="product.html" class="purchase-item-name">${item.title}</a>
                <p class="purchase-item-info">Price: <span
                    class="purchase-item-info-price">${item.price}</span></p>
                <p class="purchase-item-info">Color: <span
                    class="purchase-item-info-other">${item.color}</span></p>
                <p class="purchase-item-info">Size: <span
                    class="purchase-item-info-other">${item.size}</span></p>
                <p class="purchase-item-info">Quantity: <input type="number"
                                                                   value="1"
                                                                   min="1"
                                                                   max="99"
                                                                   class="purchase-item-info-quantity">
                </p>
            </div>
            <button class="purchase-item-delete"><img
                src="/img/purchase-delete.svg" alt="cross"></button>
    </div>`
};
/**
 * Функция наполняет заданную часть страницы блоками товаров,
 * полученных из функции renderProduct
 * @param {array} list - массив с товарами
 */
const renderPage = list => {
    const productList = list.map(item => renderProduct(item));
    document.querySelector('.cart-purchase-list')
        .innerHTML = productList.join('');
};

renderPage(products);