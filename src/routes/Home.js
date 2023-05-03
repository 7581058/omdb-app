import { Component } from '../core/core'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import BigSlide from '../components/BigSlide'
import SmallSlide from '../components/SmallSlide'
import Search from '../components/Search'
import MovieList from '../components/MovieList'
import movieStore from '../store/movie'

export default class Home extends Component {
  render() {
    this.el.classList.add('page-home')

    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el
    const bigslide = new BigSlide().el
    const smallslide = new SmallSlide().el
    const search = new Search().el
    const movieList = new MovieList().el

    this.el.append(
      theHeader,
      bigslide,
      smallslide,
      search,
      movieList,
      theFooter
    )

    movieStore.state.movies = []
    movieStore.state.message = 'Search for the movie title'
  }
}
