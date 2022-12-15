const body = document.querySelector('body')
const header = document.querySelector('header')

function changeHeaderOnScroll() {
  if (body.scrollTop > 0) {
    header.classList.add('rolling')
  } else {
    header.classList.remove('rolling')
  }
}

body.addEventListener('scroll', () => {
  changeHeaderOnScroll()
})