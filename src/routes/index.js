import { createRouter } from '../core/core'
import Start from './Start'
import Home from './Home'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Start },
  { path: '#/home', component: Home },
  { path: '.*', component: NotFound }
])
