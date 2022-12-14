const header = document.querySelector('header')

function changeHeaderOnScroll() {
  if (window.scrollY >= 100) {
    header.classList.add('rolling')
  } else {
    header.classList.remove('rolling')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderOnScroll()
})