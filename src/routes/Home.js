import { Component } from '../core/core'
import TheHeader from '../components/TheHeader'
import BigSlide from '../components/BigSlide'
import SmallSlide from '../components/SmallSlide'
import Search from '../components/Search'
import MovieList from '../components/MovieList'
import TheFooter from '../components/TheFooter'

export default class Home extends Component {
  render() {
    this.el.classList.add('page-home')

    const theheader = new TheHeader().el
    const bigslide = new BigSlide().el
    const smallslide = new SmallSlide().el
    const search = new Search().el
    const movieList = new MovieList().el
    const theFooter = new TheFooter().el

    this.el.append(
      theheader,
      bigslide,
      smallslide,
      search,
      movieList,
      theFooter
    )
  }
}
