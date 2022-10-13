export class Search {
  constructor () {
    this.mobSearch = document.querySelectorAll('.mobile-search')[0]
    this.icon = document.querySelectorAll('.search-icon')[0]
    this.icon.addEventListener('click', () => this.mobSearch.classList.toggle('is-active'))
    this.mobInput = document.querySelectorAll('.search-input-mobile')[0]
    this.offY = 56
    window.addEventListener('scroll', this.repositionMobileSearch.bind(this))
  }

  repositionMobileSearch () {
    const y = this.offY - window.scrollY < -this.offY ? 0 : this.offY - window.scrollY
    this.mobInput.style.top = `${y}px`
  }
}
