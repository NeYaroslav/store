
function setHeaderHeight() {
  const header = document.querySelector('#header')
  if(!header) return
  document.body.style.setProperty('--headerHeight', `${header.clientHeight}px`)
}

window.addEventListener('resize', setHeaderHeight)
document.addEventListener('DOMContentLoaded', setHeaderHeight)

const footer = document.getElementById('footer')
footer.innerText = `© ${new Date().getFullYear()}`

const emailInput = document.getElementById('email')
const nameInput = document.getElementById('name')
const messageInput = document.getElementById('message')
const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const validatedEmail = validateEmail(emailInput.value)
  const validatedName = validateName(nameInput.value)
  const validatedMessage = validateMessage(messageInput.value)
  if(validatedEmail.isValid === false) {
    emailInput.focus()
    error.innerText = validatedEmail.message
    return
  } else if(validatedName.isValid === false) {
    nameInput.focus()
    error.innerText = validatedName.message
    return
  } else if(validatedMessage.isValid === false) {
    messageInput.focus()
    error.innerText = validatedMessage.message
    return
  }
  error.innerText = ''
  alert("форму заповнено успішно")
})

/**
 * 
 * @param {string} value 
 */
function validateEmail (value) {
  const validation = {
    isValid: true,
    message: null
  }
  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    validation.isValid = false
    validation.message = 'Неправельний формат електронної адреси'
  }

  return validation
}

function validateName (value) {
  const validation = {
    isValid: true,
    message: null
  }
  if(!/^[а-я]+ [а-я]+$/i.test(value)) {
    validation.isValid = false
    validation.message = 'Ім\'я має містити тільки символи кирилиці та пробіл'
  }
  
  return validation
  
}

/**
 * 
 * @param {string} value 
 * @returns 
 */
function validateMessage (value) {
  const validation = {
    isValid: true,
    message: null
  }
  if(!value.trim().length) {
    validation.isValid = false
    validation.message = 'Введіть повідомлення'
  }
  
  return validation
}

function createError(value) {
  const error = document.createElement('p')
  error.classList.add('contact-form__eror')
  error.innerHTML = value
}