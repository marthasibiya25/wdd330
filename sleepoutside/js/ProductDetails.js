import products from "./productData.js";

const params = new URLSearchParams(window.location.search);

const productId = params.get("product");

const product = products.find(item => item.Id === productId);

document.querySelector("#product-name").textContent = product.Name;

document.querySelector("#product-image").src = product.Image;

document.querySelector("#product-price").textContent = "$" + product.Price;