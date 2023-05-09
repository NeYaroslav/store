
function setHeaderHeight() {
  const header = document.querySelector('#header')
  if(!header) return
  document.body.style.setProperty('--headerHeight', `${header.clientHeight}px`)
}

window.addEventListener('resize', setHeaderHeight)
document.addEventListener('DOMContentLoaded', setHeaderHeight)

const footer = document.getElementById('footer')
footer.innerText = `© ${new Date().getFullYear()}`