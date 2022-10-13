export class Footer {
  constructor () {
    this.showMore = Array.from(document.querySelectorAll('.more-btn'))
    this.showMore.map((el) => {
      el.addEventListener('click', this.toggleMore.bind(this))
    })
  }
  
  toggleMore (e) {
    e.currentTarget.parentElement.classList.toggle('openMobile')
  }

}
