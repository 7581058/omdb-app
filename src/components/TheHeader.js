import { Component } from '../core/core'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Movies',
            href: '#/movies'
          },
          {
            name: 'Series',
            href: '#/series'
          },
          {
            name: 'Episode',
            href: '#/episode'
          }
        ]
      }
    })
  }
  render() {
    this.el.innerHTML = /*HTML*/ `
      <h1>OMDbAPI.COM</h1>
    `
  }
}
