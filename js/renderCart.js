"use strict";

class ProductList {
    constructor(container= '.cart-purchase-list') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.renderTotalPrice();
    }
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'jacket', image: 'img/featured-1.png',
                color: 'blue',size: 'M', price: 500},
            {id: 2, title: 'suit', image: 'img/featured-2.png',
                color: 'red', size: 'L', price: 300},
            {id: 3, title: 'sweater', image: 'img/featured-3.png',
                color: 'yellow', size: 'XL', price: 400},
            {id: 4, title: 'pants', image: 'img/featured-4.png',
                color: 'gray', size: 'S', price: 600}
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    totalPrice() {
        let goodsPrice = null;
        this.goods.forEach(e => {
            goodsPrice += e.price;
        });
        return goodsPrice;
    }
    renderTotalPrice() {
        const block = document.querySelector('.grand-total-span');
        block.innerHTML = this.totalPrice();
    }
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.image = product.image;
        this.color = product.color;
        this.size = product.size;
        this.price = product.price;
    }
    render() {
        return `<div class="purchase-item">
        <img src="${this.image}" alt="cart-item"
             class="purchase-item-img">
            <div class="purchase-item-txt">
                <a href="product.html" class="purchase-item-name">${this.title}</a>
                <p class="purchase-item-info">Price: <span
                    class="purchase-item-info-price">${this.price}</span></p>
                <p class="purchase-item-info">Color: <span
                    class="purchase-item-info-other">${this.color}</span></p>
                <p class="purchase-item-info">Size: <span
                    class="purchase-item-info-other">${this.size}</span></p>
                <p class="purchase-item-info">Quantity: <input type="number"
                                                                   value="1"
                                                                   min="1"
                                                                   max="99"
                                                                   class="purchase-item-info-quantity">
                </p>
            </div>
            <button class="purchase-item-delete"><img
                src="img/purchase-delete.svg" alt="cross"></button>
    </div>`
    }
}

class Cart {
    clearAll() {

    }
    getDiscount() {

    }
    getTotalPrice
}

class CartElement {
    remove() {

    }
    getQuantity() {

    }
    checkDiscount() {

    }
}

let list = new ProductList();
