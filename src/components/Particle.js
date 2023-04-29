import { Component } from '../core/core'

export default class Particle extends Component {
  render() {
    this.el.classList.add('animation-wrapper')

    const part = 4

    for (let i = 1; i <= part; i += 1) {
      const part = document.createElement('div')
      part.setAttribute('class', `particle particle-${i}`)
      this.el.append(part)
    }
  }
}
