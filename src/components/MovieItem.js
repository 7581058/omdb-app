import { Component } from '../core/core'

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    const { movie } = this.props

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
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
  }
}

{
  /* <div class="year">
          ${movie.Year}
        </div> */
}
