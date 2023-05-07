import { Component } from '../core/core'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import TopVideo from '../components/TopVideo'
import SmallSlide from '../components/SmallSlide'
import Search from '../components/Search'
import MovieList from '../components/MovieList'
import movieStore from '../store/movie'
import ObserverEl from '../components/ObserverEl'

export default class Home extends Component {
  render() {
    this.el.classList.add('page-home')

    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el
    const topvideo = new TopVideo().el
    const smallslide = new SmallSlide().el
    const search = new Search().el
    const movieList = new MovieList().el
    const observerEl = new ObserverEl().el

    this.el.append(
      theHeader,
      topvideo,
      smallslide,
      search,
      movieList,
      observerEl,
      theFooter
    )

    movieStore.state.movies = []
    movieStore.state.message = 'Search for the movie title'
  }
}
