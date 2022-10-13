/* eslint-disable no-unused-vars */
import {MobileMenu} from './components/mobileMenu'
import {Search} from './components/search'
import {FlickitySlider} from './components/flickitySlider'
import {Footer} from './components/footer'
import {VideoModal} from './components/videoModal'
import {LgpdModal} from './components/lgpdModal'
import {FormModal} from './components/formModal'
import {FormLead} from './components/formLead'

const footer = new Footer()
const menu = new MobileMenu()
const search = new Search()
const productSliderEl = document.querySelectorAll('[data-product-slider]')[0]
const productCard = productSliderEl.getElementsByClassName('product-card')
const lgpdModal = new LgpdModal()
const formModal = new FormModal()
const formLead = new FormLead()


const productSlider = new FlickitySlider(productSliderEl, 
  [
    {
      max_width: 99999,
      config:{
        groupCells: '80%',
        cellAlign: 'left',
        prevNextButtons:productCard.length <= 3 ? 0 : 1,
        pageDots: productCard.length <= 3 ? 0 : 1,
        imagesLoaded:true
      }
    },
    {
      max_width: 1024,
      config: {
        cellAlign: 'left',
        prevNextButtons:true,
        pageDots:true
      }
    },
]
  
)

const videosSliderEl = document.querySelectorAll('[data-videos-slider]')[0]
const videoCard = videosSliderEl.getElementsByClassName('video-card')

const videosSlider = new FlickitySlider(videosSliderEl, 
  [
    {
      max_width: 99999,
      config:{
        groupCells: '80%',
        cellAlign: 'left',
        draggable: true,
        prevNextButtons:videoCard.length <= 3 ? 0 : 1,
        pageDots:videoCard.length <= 3 ? 0 : 1,
        imagesLoaded:true,
        dragThreshold: 10,
      }
    },
    {
      max_width: 1024,
      config:{
        cellAlign: 'left',
        prevNextButtons:true,
        pageDots:true,
        draggable: true,
        imagesLoaded:true
      }
    },
    
  ]
)

const videoModal = new VideoModal(videosSlider)

const imagesGallerySlider = new FlickitySlider(document.querySelectorAll('[data-images-slider]')[0], 
  [
    {
      max_width: 99999,
      config:{
        groupCells: '80%',
        cellAlign: 'left',
        draggable: true,
        prevNextButtons: true,
        pageDots:true,
        imagesLoaded:true,
        dragThreshold: 10,
      }
    },
    {
      max_width: 1024,
      config:{
        cellAlign: 'left',
        prevNextButtons: true,
        pageDots:true,
        draggable: true,
        imagesLoaded:true
      }
    },
    
  ]
)
