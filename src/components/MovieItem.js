import { Component } from '../core/core'
import MovieDetail from './MovieDetail'
import movieStore, { getMovieDetails } from '../store/movie'

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'div'
    })
  }
  render() {
    const { movie } = this.props
    this.el.classList.add('movie')
    this.el.innerHTML = /*HTML*/ `
      <div class="poster-wrap">
        <div 
          class="poster" 
          style = "background-image: url('${movie.Poster}')">
        </div>
      </div>
      <p class="title">
        ${movie.Title}
      </p>
    `

    this.el.addEventListener('click', async () => {
      await getMovieDetails(movie.imdbID)

      const body = document.querySelector('body')
      body.classList.add('scroll-hidden')
    })
  }
}
