import { createStore, applyMiddleware } from 'redux'
import userApi from '../middlewares/userApi'
import reducer from '../reducer' 

const enhancer = applyMiddleware(userApi)

const store = createStore(reducer, {}, enhancer)

export default store