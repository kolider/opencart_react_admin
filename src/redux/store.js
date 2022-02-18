
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {ordersReducer} from "./orders-reducer";

let reducers = combineReducers({
    auth: authReducer,
    ordersReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))