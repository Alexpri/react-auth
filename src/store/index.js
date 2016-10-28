import { createStore, applyMiddleware, compose } from 'redux'
import logger from '../middlewares/logger'
import userApi from '../middlewares/userApi'
import reducer from '../reducer' 

const enhancer = compose(
    applyMiddleware(logger, userApi),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store