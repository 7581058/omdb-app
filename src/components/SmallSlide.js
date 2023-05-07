import { Component } from '../core/core'
import { register } from 'swiper/element/bundle'
import recommendStore, { getGenre } from '../store/recommend'
import movieStore from '../store/movie'

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

    const fetchData = async () => {
      const responses = await Promise.all(
        recommendStore.state.genreArr.map(id => {
          return fetch(
            `https://omdbapi.com?apikey=14c167f8&i=${id}&plot=full`
          ).then(res => res.json())
        })
      )
      responses.forEach(movie => {
        const slide = document.createElement('swiper-slide')
        slide.innerHTML = /*HTML*/ `
          <img class="poster" src="${movie.Poster}" />
          `
        swipercontainer.append(slide)

        slide.addEventListener('click', async () => {
          movieStore.state.movie = {}
          movieStore.state.contents = false
          movieStore.state.modal = true
          movieStore.state.movie = movie
          movieStore.state.contents = true
        })
      })
    }
    fetchData()
    register()
  }
}
