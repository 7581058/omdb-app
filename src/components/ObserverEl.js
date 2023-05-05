import { Component } from '../core/core'
import movieStore, { searchMovies } from '../store/movie'

export default class ObserverEl extends Component {
  render() {
    this.el.classList.add('observer-container')
    this.el.innerHTML = /*HTML*/ `
      <div id="observe"></div>
    `

    const io = new IntersectionObserver(handle, {
      threshold: 0.5
    })
    function handle(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (
            //movieStore.state.message === '' &&
            movieStore.state.page < movieStore.state.pageMax
          ) {
            searchMovies()
            if (movieStore.state.page === movieStore.state.pageMax) {
              io.disconnect()
              console.log('옵저버 초과 감지')
            }
          }
        }
      })
    }
    const observer = this.el.querySelector('#observe')
    io.observe(observer)
  }
}
