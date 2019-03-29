import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { userReducer } from './user/reducer'
const loggerMiddleware = createLogger()
let store = createStore(
    userReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware))
export default store