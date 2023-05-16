import { furniture } from "./data";
import Cart from "./storages/Cart";
import FavouriteList from "./storages/FavouriteList";
import Product from "./Product";

import watchTemplate from "./watchTemplate";

const header = document.getElementById("header");
const footer = document.getElementById("footer");
watchTemplate(header, footer);

const cart = new Cart("cart");
const favouriteList = new FavouriteList("favourite", furniture);
const products = favouriteList.getTransformedData().map((favouriteListItem) => {
  return new Product(
    favouriteListItem,
    "./public/sprite.svg",
    onFavouriteButtonClick,
    onCartButtonClick
  );
});

document
  .getElementById("products")
  .append(...products.map((product) => product.createProductCard()));
products.forEach((product) => product.watch());

/**
 *
 * @param {Event} e
 * @param {HTMLButtonElement} button
 * @param {number} id
 */
function onFavouriteButtonClick(_e, button, id) {
  favouriteList.toggle(id);
  button.classList.toggle("product-card__fav-btn_fav");
}
/**
 *
 * @param {Event} e
 * @param {HTMLButtonElement} button
 * @param {number} id
 */
function onCartButtonClick(_e, _button, id) {
  cart.add(id);
}
