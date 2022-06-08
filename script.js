window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //verifica se a seção passou da linha
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verifica se a base da seção está abaixo da linha
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}] `)

  menuElement.classList.remove('active')
  if (sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services header,
  #services .content,
  #services .card,
  #testimonials header,
  #testimonials content,
  #testimonials .brandsThatTrust,
  #about,
  #about header,
  #about .content
`)

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  grabCursor: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const swiperBrands = new Swiper('.swiper-brands', {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  effect: 'flip',
  flipEffect: {
    slideShadows: false
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      effect: 'slide',
      enabled: false
    }
  }
})
