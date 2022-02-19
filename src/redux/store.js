import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {ordersReducer} from "./orders-reducer";
import sagaCreater from 'redux-saga'

const saga = sagaCreater()
let reducers = combineReducers({
    auth: authReducer,
    ordersReducer
})

export let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
        //saga
    )
)

//todo Add rootWatcher
//saga.run()