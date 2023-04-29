import { Component } from '../core/core'
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
  constructor() {
    super({})
  }
  render() {
    this.el.classList.add('search')

    this.el.innerHTML = /*HTML*/ `
      <div class="search-wrap">
        <input value="" placeholder="Enter the movie title to search" />
        <select id='year'>
          <option>year</option>
        </select>
        <button class="btn-search">Search</button>
      </div>
    `

    const thisYear = new Date().getFullYear()
    const select = this.el.querySelector('#year')
    for (let i = thisYear; i >= 1985; i--) {
      const options = document.createElement('option')
      options.value = i
      options.innerText = i
      select.append(options)
    }

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(2)
        searchMovies(1)
      }
    })
    const btnEl = this.el.querySelector('.btn-search')
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(2)
        searchMovies(1)
      }
    })
  }
}
