const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation-close-btn')

const blurOverlay = document.querySelector('.blur-overlay')

const is_active = 'is-active'

const toggleNvaigation = () => {
  navigation.classList.toggle(is_active)
  blurOverlay.classList.toggle(is_active)
  fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNvaigation)
navCloseBtn.addEventListener(CLICK, toggleNvaigation)
blurOverlay.addEventListener(CLICK, toggleNvaigation)



new fullpage('#fullpage', {
  autoScrolling: true,
  scrollBar: true,
})