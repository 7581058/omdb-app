import { Component } from '../core/core'
import { register } from 'swiper/element/bundle'
import movieStore, { getMovieDetails } from '../store/movie'
import 'swiper/css/autoplay'
import 'swiper/scss/autoplay'

export default class BigSlide extends Component {
  render() {
    const newmovies = [
      {
        title: '정이',
        id: 'tt22352848',
        duration: 91000
      },
      {
        title: '스위치',
        id: 'tt24076346',
        duration: 64000
      },
      {
        title: '슬램덩크 더 퍼스트',
        id: 'tt15242330',
        duration: 60000
      },
      {
        title: '교섭',
        id: 'tt21111120',
        duration: 57000
      }
    ]

    this.el.classList.add('big-slide')

    this.el.innerHTML = /*HTML*/ `
      <swiper-container
        autoplay="true"
        loop="true"
        loop-additional-slides=1
      >
      </swiper-container>
    `

    const swipercontainer = this.el.querySelector('swiper-container')

    newmovies.forEach(async movie => {
      await getMovieDetails(movie.id)
      const slide = document.createElement('swiper-slide')
      // slide.setAttribute('data-swiper-autoplay', movie.duration)
      slide.innerHTML = /*HTML*/ `
        <div class="player">
          <video
            autoplay
            muted
          >
            <source src="./resource/${movieStore.state.movie.imdbID}.mp4" />
          </video>
          <div class="player-controls">
            <button class="volume muted">
              <span class="material-symbols-outlined">
                ${movieStore.state.muted ? 'volume_off' : 'volume_up'}
              </span>
            </button>
          </div>
          <div class="info">
            <p class="title">${movieStore.state.movie.Title}</p>
            <div class="year">${movieStore.state.movie.Released}</div>
            <div class="plot">
              ${movieStore.state.movie.Plot}
            </div>
            <a href="#" class="btn btn-slide">More...</a>
          </div>
        </div>
      `
      swipercontainer.append(slide)
    })
    register()
  }
}
