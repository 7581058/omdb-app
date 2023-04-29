import { createRouter } from '../core/core'
import Start from './Start'
import Home from './Home'

export default createRouter([
  { path: '#/', component: Start },
  { path: '#/home', component: Home }
])
