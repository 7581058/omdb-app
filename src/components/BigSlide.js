import { Component } from '../core/core'
import { register } from 'swiper/element/bundle'

export default class BigSlide extends Component {
  render() {
    this.el.classList.add('big-slide')
  }
}
