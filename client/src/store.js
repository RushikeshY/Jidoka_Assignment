import {legacy_createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
// import { reducer } from './reducer'
import { isAuthReducer } from './Redux/Auth/authreducer'

let rootReducer =  combineReducers({isAuth:isAuthReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )

export default store