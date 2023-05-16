import { furniture } from "./data";
import Cart from "./storages/Cart";
import CartProduct from "./CartProduct";
import watchTemplate from "./watchTemplate";

const header = document.getElementById("header");
const footer = document.getElementById("footer");
watchTemplate(header, footer);

const fullCartPrice = document.getElementById("full-price");

const cart = new Cart("cart");
const products = furniture.map((furnitureItem) => {
  return new CartProduct(
    furnitureItem,
    cart,
    onAddButtonClick,
    onRemoveButtonClick
  );
});
const cartContainer = document.getElementById("cart");

function run() {
  cartContainer.innerHTML = "";
  cartContainer.append(
    ...products.map((product) => product.createCard() ?? "")
  );
  products.forEach((product) => product.watch());
  const cartvalues = cart.get();
  const price = furniture.reduce((acc, product) => {
    const itemsInCart = cartvalues[product.id];
    if (!itemsInCart) return acc;
    return acc + itemsInCart * product.price;
  }, 0);
  fullCartPrice.innerText = price;
}
run();
/**
 *
 * @param {Event} e
 * @param {HTMLButtonElement} button
 * @param {number} id
 */
function onAddButtonClick(_e, _button, id) {
  cart.add(id);
  run();
}
/**
 *
 * @param {Event} e
 * @param {HTMLButtonElement} button
 * @param {number} id
 */
function onRemoveButtonClick(_e, _button, id) {
  cart.remove(id);
  run();
}
