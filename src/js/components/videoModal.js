export class VideoModal {
  constructor (videosSlider) {
    this.video = document.getElementsByClassName('video-container')[0]
    this.links = Array.from(document.querySelectorAll('.video-modal'))

    const mql = window.matchMedia('(max-width: 1024px)')

    if (mql.matches) {
      this.links.map((el) => {
        el.addEventListener('click', this.toggleModal.bind(this))
      })
    } else {
      videosSlider.flickRender(flick => {
        flick.on('staticClick', event => this.toggleModal(event))
      })
    }
    
    this.video.addEventListener('click', this.displayModal.bind(this))

    // set youtube image
    // https://codepad.co/snippet/embed-lazy-load-youtube-videos
    const youtube = document.querySelectorAll('.youtube')

    for (let i = 0; i < youtube.length; i += 1) {
      // variables
      if (youtube[i].dataset.embed) {
        const source = 'https://img.youtube.com/vi/' + youtube[i].dataset.embed + '/hqdefault.jpg'
        const image = new Image()
        
        image.src = source
        image.addEventListener( 'load', (function () {
          youtube[i].appendChild( image )
        })( i ) )
      }
    }
  }

  // display modal
  displayModal (urlVideo = null, videoCard = null) {
    // variables
    const html = document.getElementsByTagName('html')[0]
    const body = document.getElementsByTagName('body')[0]
    const video = document.getElementsByClassName('video-container')[0]
    const top = window.pageYOffset || document.documentElement.scrollTop
    const videoTitle = videoCard !== null ? videoCard.getElementsByClassName('video-title')[0].innerHTML.replace( /(<([^>]+)>)/ig, '') : ''
    const videoDescription = videoCard !== null ? videoCard.getElementsByClassName('video-description')[0].innerHTML : ''
    // set video h1
    video.getElementsByTagName('h3')[0].innerHTML = videoTitle
    // set video description
    video.getElementsByTagName('p')[0].innerHTML = videoDescription
    // disable/enable scrolling   
    if(html.getAttribute('style') === null || html.getAttribute('style') === '') {
      // set video src
      urlVideo !== '' ? video.getElementsByTagName('iframe')[0].setAttribute('src', urlVideo) : ''

      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
      // show video
      video.classList.remove('is-hidden-desktop', 'is-hidden-touch')
      // to open in the current top position
      video.style.top = top + 'px'
    } else {
      html.style.removeProperty('overflow')
      body.style.removeProperty('overflow')
      // hide video
      video.classList.add('is-hidden-desktop', 'is-hidden-touch')
      video.getElementsByTagName('iframe')[0].setAttribute('src', '')
    }
  }

  toggleModal (e) {
    // video-card element
    const videoCard = e.composedPath()[6]
    const urlVideo = 'https://www.youtube.com/embed/' + e.composedPath()[3].querySelectorAll('.youtube')[0].getAttribute('data-embed')
    //
    this.displayModal(urlVideo, videoCard)
  }
}
