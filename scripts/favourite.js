import { furniture } from "./data";
import Cart from "./storages/Cart";
import FavouriteList from "./storages/FavouriteList";
import Product from "./Product";
import watchTemplate from "./watchTemplate";

const header = document.getElementById("header");
const footer = document.getElementById("footer");
watchTemplate(header, footer);

const cart = new Cart("cart");
const productsContainer = document.getElementById("products");
const favouriteList = new FavouriteList("favourite", furniture);

function run() {
  const products = favouriteList
    .getTransformedData()
    .filter((favouriteListItem) => favouriteListItem.isFavourite)
    .map((favouriteListItem) => {
      return new Product(
        favouriteListItem,
        "./public/sprite.svg",
        onFavouriteButtonClick,
        onCartButtonClick
      );
    });
  productsContainer.innerHTML = "";
  productsContainer.append(
    ...products.map((product) => product.createProductCard())
  );
  products.forEach((product) => product.watch());
}
run();
/**
 *
 * @param {Event} e
 * @param {HTMLButtonElement} button
 * @param {number} id
 */
function onFavouriteButtonClick(_e, _button, id) {
  favouriteList.toggle(id);
  run();
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
