class Product {
  #data
  #spriteLocation
  #cartButton
  #onCartButtonClick
  #favouriteButton
  #onFavouriteButttonClick
  /**
   * 
   * @param {{
   *  id: number,
   *  title: string,
   *  price: number,
   *  prevPrice: number | null,
   *  category: string,
   *  rate: number | null,
   *  img: string
    * isFavourite?: boolean
   * }} data 
   * @param {string} spriteLocation 
   * @param {(e: Event, button: HTMLButtonElement, id: number) => void} onFavouriteButttonClick 
   * @param {(e: Event, button: HTMLButtonElement, id: number) => void} onCartButtonClick 
   */
  constructor(data, spriteLocation, onFavouriteButttonClick, onCartButtonClick) {
    this.#data = data
    this.#spriteLocation = spriteLocation
    this.#onFavouriteButttonClick = onFavouriteButttonClick
    this.#onCartButtonClick = onCartButtonClick
  }
  watch() {
    if(this.#cartButton)  {
      this.#cartButton.addEventListener('click', (e) => {
        this.#onCartButtonClick(e, this.#cartButton, this.#data.id)
      })
    }
    if(this.#favouriteButton) {
      this.#favouriteButton.addEventListener('click', (e) => {
        this.#onFavouriteButttonClick(e, this.#favouriteButton, this.#data.id)
        console.log(this.#data?.isFavourite);
      })
    }
  }
  createProductCard() {
    const card = document.createElement('div')
    card.classList.add('grid-products__product', 'product-card')

    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('product-card__img')

    const img = document.createElement('img')
    img.src = this.#data.img
    img.alt = this.#data.title

    const discountLabel = this.#createDiscountLabel()
    discountLabel && imgWrapper.append(discountLabel)
    imgWrapper.append(img, this.#createToggleFavouriteButton())

    const infoWrapper = document.createElement('div')
    infoWrapper.classList.add('product-card__info')

    const review = document.createElement('div')
    review.classList.add('product-card__review')
    
    const reviewIcons = this.#getReview().map(reviewIcon => this.#createIcon(reviewIcon)) //! does work without bind? 
    
    review.append(...reviewIcons)

    const title = document.createElement('h4')
    title.classList.add('product-card__title')
    title.innerText = this.#data.title

    infoWrapper.append(review, title, this.#createPriceInfo(), this.#createAddToCartButton())

    card.append(imgWrapper, infoWrapper)
    return card
  }
  #getReview() {
    const stars = {
      halfLine: 'star-half-line',
      fill: 'star-fill',
      line: 'star-line',
    }
    const starsIcons = []
    const rate = this.#data.rate

    for(let i = rate; i > 0; i--) {
      if(starsIcons.at(-1) === stars.halfLine) {
        starsIcons[starsIcons.length - 1] = stars.fill
      } else {
        starsIcons.push(stars.halfLine)
      }
    }
    starsIcons.length = 5
    
    const lastFillIndex = Math.max(
      starsIcons.lastIndexOf(stars.fill),
      starsIcons.lastIndexOf(stars.halfLine)
    )

    starsIcons.fill(stars.line, lastFillIndex + 1)

    return starsIcons
  }
  #createDiscountLabel() {
    const discount = 100 - Math.round(this.#data.price * 100 / this.#data.prevPrice ?? this.#data.price)
    let discountLabel = null
    if(discount > 0) {
      discountLabel = document.createElement('span')
      discountLabel.classList.add('product-card__tag')
      discountLabel.innerHTML = `-${discount}%`
    }
    return discountLabel
  }
  #createPriceInfo() {
    const prices = document.createElement('div')
    prices.classList.add('product-card__prices')

    const currentPrice = document.createElement('span')
    currentPrice.classList.add('product-card__current-price')
    currentPrice.innerText = this.#data.price

    prices.append(currentPrice)

    let prevPrice = null
    if(this.#data.prevPrice > this.#data.price) {
      prevPrice = document.createElement('span')
      prevPrice.classList.add('product-card__prev-price')
      prevPrice.innerText = this.#data.prevPrice
    }
    prevPrice && prices.append(prevPrice)
    return prices
  }
  #createIcon(iconName) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    use.setAttribute('href', `${this.#spriteLocation}#${iconName}`)
    svg.append(use)
    return svg
  }
  #createToggleFavouriteButton() {
    const button = document.createElement('button')
    button.classList.add('product-card__fav-btn', this.#data?.isFavourite && 'product-card__fav-btn_fav') // ! is fav implementation
    button.append(this.#createIcon('heart'))

    this.#favouriteButton = button
    return button
  }
  #createAddToCartButton() {
    const button = document.createElement('button')
    button.classList.add('product-card__buy-btn')
    button.innerText = 'В кошик'

    this.#cartButton = button
    return button
  }
}

export default Product