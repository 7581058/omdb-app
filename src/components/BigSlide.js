import { Component } from '../core/core'
import { register } from 'swiper/element/bundle'

export default class BigSlide extends Component {
  render() {
    const newmovies = [
      {
        title: '정이',
        id: 'tt22352848'
      },
      {
        title: '스위치',
        id: 'tt24076346'
      },
      {
        title: '슬램덩크 더 퍼스트',
        id: 'tt15242330'
      },
      {
        title: '교섭',
        id: 'tt21111120'
      }
    ]

    this.el.classList.add('big-slide')
  }
}
