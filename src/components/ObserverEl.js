import { Component } from '../core/core'
import movieStore, { searchMovies } from '../store/movie'

export default class ObserverEl extends Component {
  render() {
    this.el.classList.add('observer-container')
    this.el.innerHTML = /*HTML*/ `
      <div id="observe"></div>
    `

    const io = new IntersectionObserver(handleObserver, {
      threshold: 0.5
    })
    function handleObserver(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (movieStore.state.page < movieStore.state.pageMax) {
            movieStore.state.page += 1
            searchMovies(movieStore.state.page)
            if (movieStore.state.page === movieStore.state.pageMax) {
              io.disconnect()
            }
          }
        }
      })
    }
    const observer = this.el.querySelector('#observe')
    io.observe(observer)
  }
}
