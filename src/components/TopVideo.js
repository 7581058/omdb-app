import { Component } from '../core/core'
import movieStore, { getMovieDetails } from '../store/movie'
import recommendStore from '../store/recommend'

export default class TopVideo extends Component {
  render() {
    this.el.classList.add('video-container')

    const fetchData = async () => {
      const newmovie = { ...recommendStore.state.newmovies }

      await getMovieDetails(newmovie[2].id)
      const { movie } = movieStore.state

      this.el.innerHTML = /*HTML*/ `
        <div class="player">
          <video autoplay loop muted>
            <source src="./resource/${movie.imdbID}.mp4" />
          </video>
          <div class="player-controls">
            <button class="volume muted">
              <span class="material-symbols-outlined">
                ${movieStore.state.muted ? 'volume_off' : 'volume_up'}
              </span>
            </button>
          </div>
          <div class="info">
            <p class="title">${movie.Title}</p>
            <div class="year">${movie.Released}</div>
            <div class="plot">
              ${movie.Plot}
            </div>
            <button class="btn btn-more">More...</button>
          </div>
        </div>
      `
      const moreButton = this.el.querySelector('.btn-more')
      moreButton.addEventListener('click', () => {
        movieStore.state.movie = {}
        movieStore.state.contents = false
        movieStore.state.modal = true
        movieStore.state.movie = movie
        movieStore.state.contents = true
      })
    }
    fetchData()
  }
}
