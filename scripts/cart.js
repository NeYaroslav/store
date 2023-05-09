import { furniture } from './data'
import Cart from './storages/Cart'
import FavouriteList from './storages/FavouriteList'
import Product from './Product'
import CartProduct from './CartProduct'

function setHeaderHeight() {
  const header = document.querySelector('#header')
  if(!header) return
  document.body.style.setProperty('--headerHeight', `${header.clientHeight}px`)
}

window.addEventListener('resize', setHeaderHeight)
document.addEventListener('DOMContentLoaded', setHeaderHeight)

const footer = document.getElementById('footer')
footer.innerText = `© ${new Date().getFullYear()}`

const fullCartPrice = document.getElementById('full-price')


const cart = new Cart('cart')
const products = furniture.map(favouriteListItem => {
  return new CartProduct(favouriteListItem, cart, onFavouriteButtonClick, onCartButtonClick)
})
const cartContainer = document.getElementById('cart')

function run() {
  cartContainer.innerHTML = ''
  cartContainer.append(...products.map(product => product.createCard() ?? ''))
  products.forEach(product => product.watch())
  const cartvalues = cart.get()
  const price = furniture.reduce((acc, product) => {
    const itemsInCart = cartvalues[product.id]
    if(!itemsInCart) return acc
    return acc + itemsInCart * product.price
  }, 0)
  fullCartPrice.innerText = price
}
run()
/**
 * 
 * @param {Event} e 
 * @param {HTMLButtonElement} button 
 * @param {number} id 
 */
function onFavouriteButtonClick (e, button, id) {
  cart.add(id)
  run()
}
/**
 * 
 * @param {Event} e 
 * @param {HTMLButtonElement} button 
 * @param {number} id 
*/
function onCartButtonClick (e, button, id) {
  cart.remove(id)
  run()
}
