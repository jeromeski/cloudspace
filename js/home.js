
const btns = document.querySelectorAll('.btn')

window.onload = () => {
  const getWindowSize = () => {
    if (window.innerWidth <= 900) {
      console.log('function fired')
      changeBtnSize()
    } 
  }
  getWindowSize()

  window.addEventListener('resize', changeBtnSize)

}

const changeBtnSize = () => {
  if(document.documentElement.clientWidth <= 900) {
    btns.forEach((btn) => {
      if(btn.classList.contains('btn-large')) {
        btn.classList.add('btn-marked')
        btn.classList.remove('btn-large')
      }
    })
  } else if (document.documentElement.clientWidth > 375) {
    btns.forEach((btn) => {
      if(btn.classList.contains('btn-marked')) {
        btn.classList.remove('btn-marked')
        btn.classList.add('btn-large')
      }
    })
  }
}
