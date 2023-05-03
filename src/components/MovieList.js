import { Component } from '../core/core'
import movieStore, { searchMovies } from '../store/movie'
import MovieItem from './MovieItem'
import MovieDetail from './MovieDetail'
import TheLoader from './TheLoader'

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {
      this.render()
    })
    movieStore.subscribe('listLoading', () => {
      this.render()
    })
    movieStore.subscribe('message', () => {
      this.render()
    })

    // movieStore.subscribe('pageMax', () => {
    //   const { page, pageMax } = movieStore.state

    //   pageMax > page
    //     ? this.el.classList.remove('hide')
    //     : this.el.classList.add('hide')
    // })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /*HTML*/ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : '<div class="movies"></div>'
      }
    `
    const loader = new TheLoader().el
    const detail = new MovieDetail().el
    this.el.append(loader, detail)

    movieStore.state.listLoading
      ? loader.classList.remove('hide')
      : loader.classList.add('hide')

    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      ...movieStore.state.movies.map(
        movie =>
          new MovieItem({
            movie
          }).el
      )
    )
    /////////////////////////////////////////////////////////
    // let count = 0

    // function makeListElement() {
    //   Array(1)
    //     .fill(0)
    //     .forEach(() => {
    //       const li = document.createElement('li')
    //       li.classList.add('testli')
    //       li.textContent = ++count
    //       moviesEl.appendChild(li)
    //     })
    // }
    ////////////////////////////////////////////////////////
    // if (movieStore.state.message === '' && movieStore.state.page >= 2) {
    //   let li = document.querySelector('.movie:last-child')
    //   const io = new IntersectionObserver(
    //     (entries, observer) => {
    //       if (entries[0].isIntersecting) {
    //         console.log('관찰', entries[0].target)

    //         io.unobserve(entries[0].target)
    //         //searchMovies(movieStore.state.page + 1)
    //         makeListElement()
    //         let li2 = document.querySelector('.testli:last-child')
    //         io.observe(li2)

    //         console.log('관찰2', entries[0].target)
    //       }
    //     },
    //     {
    //       //타겟 80프로 보일때
    //       threshold: 1
    //     }
    //   )

    //   io.observe(li)
    // }
    ////////////////////////////////////////////////////////
  }
}
