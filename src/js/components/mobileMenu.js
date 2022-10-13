export class MobileMenu {
  constructor () {
    this.menuToggle = document.querySelectorAll('[data-menu]')[0]
    this.menuToggle.addEventListener('click', this.toggleMenu)
    Array.from(document.querySelectorAll('[data-menu-item]')).map((el) => {
      el.addEventListener('click', this.toggleMenu)
    })
  }
  
  toggleMenu () {
    Array.from(document.querySelectorAll('[data-menu]')).map((el) => {
      const isActive = el.classList.toggle('is-active')
      document.documentElement.classList.toggle('is-clipped', isActive)
    })
  }

}
