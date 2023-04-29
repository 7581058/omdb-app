import { Component } from '../core/core'
import TheHeader from '../components/TheHeader'
import Particle from '../components/Particle'
import TheFooter from '../components/TheFooter'

export default class Start extends Component {
  render() {
    this.el.classList.add('page-start')

    const genres = [
      {
        name: 'No Thanks',
        code: 'genre_00'
      },
      {
        name: 'Action',
        code: 'genre_01'
      },
      {
        name: 'Comedy',
        code: 'genre_02'
      },
      {
        name: 'Drama',
        code: 'genre_03'
      },
      {
        name: 'Science Fiction',
        code: 'genre_04'
      },
      {
        name: 'Romance',
        code: 'genre_05'
      },
      {
        name: 'Thriller',
        code: 'genre_06'
      },
      {
        name: 'Animation',
        code: 'genre_07'
      },
      {
        name: 'Horror',
        code: 'genre_08'
      }
    ]

    this.el.innerHTML = /*HTML*/ `
      <div class="headline">
        <h1 class="title">
          <span>OMDb API</span><br>
          THE OPEN<br>
          MOVIE DATABASE
        </h1>
        <p class="plot">
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
        ${genres
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

    const theheader = new TheHeader().el
    const particle = new Particle().el
    const theFooter = new TheFooter().el

    this.el.append(particle, theheader, selector, theFooter)
  }
}
