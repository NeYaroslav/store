import { furniture } from './data'
import Cart from './storages/Cart'
import FavouriteList from './storages/FavouriteList'
import Product from './Product'

function setHeaderHeight() {
  const header = document.querySelector('#header')
  if(!header) return
  document.body.style.setProperty('--headerHeight', `${header.clientHeight}px`)
}

window.addEventListener('resize', setHeaderHeight)
document.addEventListener('DOMContentLoaded', setHeaderHeight)

const footer = document.getElementById('footer')
footer.innerText = `© ${new Date().getFullYear()}`


const cart = new Cart('cart')
const productsContainer = document.getElementById('products')
const favouriteList = new FavouriteList('favourite', furniture)

function run () {
  const products = favouriteList.getTransformedData()
    .filter(favouriteListItem => favouriteListItem.isFavourite)
    .map(favouriteListItem => {
      return new Product(favouriteListItem, './public/sprite.svg', onFavouriteButtonClick, onCartButtonClick)
    })
  productsContainer.innerHTML = ''
  productsContainer.append(...products.map(product => product.createProductCard()))
  products.forEach(product => product.watch())
}
run()
/**
 * 
 * @param {Event} e 
 * @param {HTMLButtonElement} button 
 * @param {number} id 
 */
function onFavouriteButtonClick (e, button, id) {
  favouriteList.toggle(id)
  run()
}
/**
 * 
 * @param {Event} e 
 * @param {HTMLButtonElement} button 
 * @param {number} id 
 */
function onCartButtonClick (e, button, id) {
  console.log('456');
  cart.add(id)
}
