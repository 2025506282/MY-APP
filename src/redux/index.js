import {  createStore } from 'redux'
import reducers from './reducers'
let store = createStore(reducers.user, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store