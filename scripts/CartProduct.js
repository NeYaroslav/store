class CartProduct {
  #data
  #cart
  #addButton
  #removeButton
  #onAddButtonClick
  #onRemoveButtonClick

  constructor(data, cart, onAddButtonClick, onRemoveButtonClick) {
    this.#data = data
    this.#cart = cart
    this.#onAddButtonClick = onAddButtonClick
    this.#onRemoveButtonClick = onRemoveButtonClick
  }
  watch() {
    if(this.#addButton)  {
      this.#addButton.addEventListener('click', (e) => {
        this.#onAddButtonClick(e, this.#addButton, this.#data.id)
      })
    }
    if(this.#removeButton) {
      this.#removeButton.addEventListener('click', (e) => {
        this.#onRemoveButtonClick(e, this.#removeButton, this.#data.id)
      })
    }
  }
  createCard() {
    const itemsInCart = this.#cart.get()[this.#data.id]
    if(!itemsInCart) return
    const card = document.createElement('div')
    card.classList.add('cart__item', 'cart-item')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-item__header')

    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('cart-item__img')

    const img = document.createElement('img')
    img.src = this.#data.img
    img.alt = this.#data.title

    imgWrapper.append(img)

    const title = document.createElement('h5')
    title.classList.add('cart-item__title')
    title.innerText = this.#data.title

    cardHeader.append(imgWrapper, title)

    const pricePerItem = document.createElement('span')
    pricePerItem.classList.add('cart-item__price')
    pricePerItem.innerText = `${this.#data.price} x ${itemsInCart}` //! add number of items

    const controllers = document.createElement('div')
    controllers.classList.add('cart-item__controllers')

    const addButton = document.createElement('button')
    addButton.classList.add('cart-item__add-button')
    addButton.innerText = '+'

    this.#addButton = addButton
    
    const label = document.createElement('span')
    label.classList.add('cart-item__label')
    label.innerText = itemsInCart //! show number of items
    
    const removeButton = document.createElement('button')
    removeButton.classList.add('cart-item__remove-button')
    removeButton.innerText = '-'

    this.#removeButton = removeButton

    controllers.append(addButton, label, removeButton)

    const totalPrice = document.createElement('span')
    totalPrice.classList.add('cart-item__total-price')
    totalPrice.innerText = itemsInCart * this.#data.price //! calculate totla price

    card.append(cardHeader, pricePerItem, controllers, totalPrice)
    console.log(card);
    return card
  }
}

export default CartProduct