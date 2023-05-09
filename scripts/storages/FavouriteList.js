class FavouriteList{
  #key
  #favouriteList
  #data
  /**
   * 
   * @param {string} key 
   * @param {{
   * id: number;
   * title: string;
   * price: number;
   * prevPrice: number | null;
   * category: string;
   * rate: number | null;
   * img: string;
   * }[]} data 
   */
  constructor(key, data) {
    this.#key = key
    this.#data = data
    this.#favouriteList = JSON.parse(localStorage.getItem(this.#key)) ?? []
  }
  toggle(id) {
    if(this.#favouriteList.indexOf(id) !== -1) {
      this.#favouriteList.splice(this.#favouriteList.indexOf(id), 1)
    } else {
      this.#favouriteList.push(id)
    }
    this.#saveToLocalStorage()
  }
  getTransformedData() {
    this.#data.forEach(dataItem => {
      dataItem.isFavourite = this.#favouriteList.includes(dataItem.id)
    })
    return this.#data
  }
  #saveToLocalStorage() {
    localStorage.setItem(this.#key, JSON.stringify(this.#favouriteList))
  }
}
export default FavouriteList