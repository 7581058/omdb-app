import { Component } from '../core/core'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    this.el.innerHTML = /*HTML*/ `
      <h1>OMDbAPI.COM</h1>
    `
  }
}
