import { Component } from '../core/core'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import Particle from '../components/Particle'

export default class NotFound extends Component {
  render() {
    this.el.classList.add('page-notfound')

    const container = document.createElement('div')

    container.classList.add('notfound-wrap')
    container.innerHTML = /*HTML*/ `
      <h1 class="msg">
        Page Not Found
      </h1>
    `

    const particle = new Particle().el
    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el

    this.el.append(particle, theHeader, theFooter, container)
  }
}
