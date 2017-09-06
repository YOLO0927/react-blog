import { createStore } from 'redux'
import blog from './reducers'

let store = createStore(blog)

export default store
