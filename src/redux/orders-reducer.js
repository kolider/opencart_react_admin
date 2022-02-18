import {API} from "../api/api";

const FETCHING_NEW_ORDERS = "FETCHING_NEW_ORDERS"
const SET_NEW_ORDERS = "SET_NEW_ORDERS"
const DEL_FROM_NEW_ORDERS = "DEL_FROM_NEW_ORDERS"


let initialState = {
    isFetching: false,
    currentPage: 1,
    orders: [],
}


export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NEW_ORDERS:
            return {...state, isFetching: action.isFetching}
        case SET_NEW_ORDERS:
            return {...state, orders: action.orders}
        case DEL_FROM_NEW_ORDERS:
            return {...state, orders: state.orders.filter(order=>order.order_id !== action.order_id)}
    }

    return state
}

export const toggleFetching = (isFetching) => {
    return ({
        type: FETCHING_NEW_ORDERS,
        isFetching
    })
}
export const setNewOrders = (orders) => {
    return {
        type: SET_NEW_ORDERS,
        orders
    }
}

export const delFromNewOrder = (order_id) => {
    return {
        type: DEL_FROM_NEW_ORDERS,
        order_id
    }
}

export const getNewOrders = () => (dispatch) => {
    dispatch(toggleFetching(true))
    API.getOrders()
        .then(response => {
            dispatch(setNewOrders(response.data.results))
            dispatch(toggleFetching(false))
        })
    //todo need add processing of expired token
}

export const setOrderToMe = (order_id) => (dispatch) => {
    dispatch(toggleFetching(true))
    API.setOrderToMe(order_id).then(response=>{
        if (response.data.results){
            dispatch(delFromNewOrder(order_id))
        }
    }).catch(e=>{
        dispatch(delFromNewOrder(order_id))
    }).finally(()=>{
        dispatch(toggleFetching(false))
    })
}