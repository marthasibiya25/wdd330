import products from "./productData.js";

export default class ProductList {

    constructor(category) {
        this.category = category;
    }

    async init() {

        const listElement =
            document.querySelector(".product-list");

        this.renderList(products, listElement);

    }

    renderList(products, element) {

        element.innerHTML =
            products.map(product => `
<li class="product-card">

<a href="product_pages/index.html?product=${product.Id}">

<img src="${product.Image}" alt="${product.Name}">

<h2>${product.Name}</h2>

<p>$${product.Price}</p>

</a>

</li>
`).join("");


    }

}