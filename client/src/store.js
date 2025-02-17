import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers'

const initialState = {}
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store