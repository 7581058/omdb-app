import { Component } from '../core/core'
import movieStore from '../store/movie'
import TheLoader from './TheLoader'

export default class Movie extends Component {
  constructor() {
    super()
    movieStore.subscribe('modal', () => {
      this.render()
    })
  }
  async render() {
    this.el.setAttribute('class', 'modal-bg')
    this.el.classList.add('hide')

    movieStore.state.modal
      ? this.el.classList.remove('hide')
      : this.el.classList.add('hide')

    const { movie } = movieStore.state

    //const bigPoster = movie.Poster.replace('SX300', 'SX700')
    // posterWrap.innerHTML = /*HTML*/ `
    //   <div style="background-image: url(${bigPoster})" class="poster"></div>
    // `
    this.el.innerHTML = /*HTML*/ `
      <div class="modal">
        <button class="btn-close">X</button>
        <!-- <div style="background-image: url()" class="poster"></div> -->
        <div class="poster-wrap"></div>
        <div class="specs">
          <div class="title">
            ${movie.Title}
          </div>
          <div class="labels">
            <span>${movie.Released}</span>
            &nbsp;/
            <span>${movie.Runtime}</span>
            &nbsp;/
            <span>${movie.Country}</span>
          </div>
          <div class="plot">
            ${movie.Plot}
          </div>
          <div>
            
          </div>
          <div>
            <h3>Actors</h3>
            <p>${movie.Actors}</p>
          </div>
          <div>
            <h3>Director</h3>
            <p>${movie.Director}</p>
          </div>
          <div>
            <h3>Production</h3>
            <p>${movie.Production}</p>
          </div>
          <div>
            <h3>Genre</h3>
            <p>${movie.Genre}</p>
          </div>
        </div>
      </div>
    `

    if (movieStore.state.modal) {
      const modal = this.el.querySelector('.modal')
      const loader = new TheLoader().el
      modal.append(loader)

      if (movie.Poster) {
        const posterWrap = modal.querySelector('.poster-wrap')
        let bigPoster = movie.Poster.replace('SX300', 'SX700')
        posterWrap.innerHTML = /*HTML*/ `
          <div style="background-image: url(${bigPoster})" class="poster"></div>
        `
      }

      const closeButton = this.el.querySelector('.btn-close')
      closeButton.addEventListener('click', () => {
        const body = document.querySelector('body')
        body.classList.remove('scroll-hidden')
        movieStore.state.modal = false
      })
    }
  }
}
