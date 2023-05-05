import { Component } from '../core/core'
import { register } from 'swiper/element/bundle'
import recommendStore, { getGenre } from '../store/recommend'
import movieStore, { getMovieDetails } from '../store/movie'

export default class SmallSlide extends Component {
  render() {
    this.el.classList.add('small-slide')

    getGenre(sessionStorage.getItem('selectedGenre'))

    this.el.innerHTML = /*HTML*/ `
      <p>Recommend ${recommendStore.state.genreName} Movies</p>
      <swiper-container
        slides-per-view="8"
        space-between="30"
      >
     </swiper-container>
    `
    const swipercontainer = this.el.querySelector('swiper-container')

    recommendStore.state.genreArr.map(async id => {
      const slide = document.createElement('swiper-slide')

      await getMovieDetails(id)
      const { movie } = movieStore.state

      slide.innerHTML = /*HTML*/ `
      <img class="poster" src="${movie.Poster}" />
      `
      swipercontainer.append(slide)

      slide.addEventListener('click', async () => {
        movieStore.state.movie = {}
        movieStore.state.contents = false //첫 클릭 시 undefined 뜨지 않게 수정됨!
        movieStore.state.modal = true
        await getMovieDetails(movie.imdbID)
      })
    })

    register()
  }
}
