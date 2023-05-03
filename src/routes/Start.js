import { Component } from '../core/core'
import recommendStore from '../store/recommend'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import Particle from '../components/Particle'

export default class Start extends Component {
  render() {
    this.el.classList.add('page-start')

    this.el.innerHTML = /*HTML*/ `
      <div class="headline">
        <h1 class="title">
          <span>OMDb API</span><br>
          THE OPEN<br>
          MOVIE DATABASE
        </h1>
        <p class="text">
          The OMDb API is a RESTful web service to obtain movie information, 
          all content and images on the site are contributed and maintained by our users.
          If you find this service useful, please consider making a one-time donation or become a patron.
        </p>
      </div>
    `

    const selector = document.createElement('div')
    selector.classList.add('selector-genre')
    selector.innerHTML = /*HTML*/ `
      <p class="text">When you select a genre, we will recommend a movie for you.</p>
      <div class="btn-group">
        ${recommendStore.state.genres
          .map(genre => {
            return /*HTML*/ `
            <input 
              class="genre"
              type="radio" 
              name="genre-group" 
              id="${genre.code}"
              value="${genre.code}" 
              ${genre.code === 'genre_00' ? 'checked' : ''} 
              >
            <label class="btn-selector" for=${genre.code}>${genre.name}</label>
          `
          })
          .join('')}
      </div>
      <a class="btn-gosearch" href="#/home">Go Search!</a>
    `

    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el
    const particle = new Particle().el

    this.el.append(theHeader, particle, selector, theFooter)

    const gosearchButton = this.el.querySelector('.btn-gosearch')
    gosearchButton.addEventListener('click', () => {
      const selectedGenre = document.querySelector(
        'input[name="genre-group"]:checked'
      ).value

      sessionStorage.setItem('selectedGenre', selectedGenre)
    })
  }
}
