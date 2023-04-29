import { Component } from '../core/core'
import { register } from 'swiper/element/bundle'

export default class SmallSlide extends Component {
  render() {
    this.el.classList.add('small-slide')
  }
}
