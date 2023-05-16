class Validator {
  #emailInput;
  #nameInput;
  #messageInput;
  #errorContainer;
  #form;
  #isError;
  /**
   *
   * @param {HTMLInputElement} emailInput
   * @param {HTMLInputElement} nameInput
   * @param {HTMLInputElement} messageInput
   * @param {HTMLElement} errorContainer
   * @param {HTMLFormElement} form
   */
  constructor(emailInput, nameInput, messageInput, errorContainer, form) {
    this.#emailInput = emailInput;
    this.#nameInput = nameInput;
    this.#messageInput = messageInput;
    this.#errorContainer = errorContainer;
    this.#form = form;
  }
  watch() {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.#clearError();
      this.#validateEmail();
      this.#validateName();
      this.#validateMessage();
      if (this.#isError) return;
      alert("форму заповнено успішно");
    });
  }
  #displayError(input, message) {
    if (this.#isError) return;
    this.#isError = true;
    input.focus();
    this.#errorContainer.innerText = message;
  }
  #clearError() {
    this.#isError = false;
    this.#errorContainer.innerText = "";
  }
  #validateEmail() {
    const message = "Неправельний формат електронної адреси";
    const value = this.#emailInput.value;
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      value
    );
    if (isValid) return;
    this.#displayError(this.#emailInput, message);
  }
  #validateName() {
    const message = "Ім'я має містити тільки символи кирилиці та пробіл";
    const value = this.#nameInput.value;
    const isValid = /^[а-яії]+ [а-яії]+$/i.test(value);

    if (isValid) return;
    this.#displayError(this.#nameInput, message);
  }
  #validateMessage() {
    const message = "Введіть повідомлення";
    const value = this.#messageInput.value;
    const isValid = Boolean(value.trim().length);

    if (isValid) return;
    this.#displayError(this.#messageInput, message);
  }
}

export default Validator;
