class Cart {
  #cart
  #key

  constructor (key) {
    this.#key
    this.#cart = JSON.parse(localStorage.getItem(this.#key)) ?? {}
  }
  add(id) {
    if(this.#cart[id] == undefined) {
      this.#cart[id] = 1
    } else {
      this.#cart[id] ++
    }
    this.#saveToLocalStprage()
  }
  remove(id) {
    if(this.#cart[id] != undefined) {
      this.#cart[id] --
    }
    this.#saveToLocalStprage()
  }
  get() {
    return this.#cart
  }
  #saveToLocalStprage() {
    localStorage.setItem(this.#key, JSON.stringify(this.#cart))
  }
}

export default Cart