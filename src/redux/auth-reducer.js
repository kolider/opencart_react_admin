import {API} from "../api/api";

const FETCH_LOGIN_FORM = "FETCH_LOGIN_FORM"
const INCORRECT_CREDENTIALS = "INCORRECT_CREDENTIALS"
const CLEAR_INCORRECT_ERROR = "CLEAR_INCORRECT_ERROR"
const SAVE_CREDENTIALS = "SAVE_CREDENTIALS"

const saveToStorage = (fields) => {
    for (let item in fields){
        localStorage.setItem(item, fields[item])
    }
}

// const getFromStorage = (field) => {
//     return localStorage.getItem(field) || ''
// }

const getFromStorage = () => {
    return {
        isLogged: getFromStorage("isLogged") || false,
        isFetching: false,
        isIncorrectCredentials: false,
        email: getFromStorage("email") || '',
        name: '',
        token: getFromStorage("token") || '',
    }
}

let initialState = {
    isInit: false,
    isLogged: false,
    isFetching: false,
    isIncorrectCredentials: false,
    email: '',
    name: '',
    token: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_FORM:
            return {...state, isFetching: action.isFetching}
        case INCORRECT_CREDENTIALS:
            return {...state, isIncorrectCredentials: action.isIncorrect}
        case CLEAR_INCORRECT_ERROR:
            return {...state, isIncorrectCredentials: false}
        case SAVE_CREDENTIALS:
            API.setToken(action.token)
            saveToStorage({
                isLogged: true,
                email: action.email,
                token: action.token,
            })
            return {
                ...state,
                isLogged: true,
                email: action.email,
                token: action.token
            }
    }
    return state
}

export const fetchLoginForm = (isFetching) => ({
    type: FETCH_LOGIN_FORM,
    isFetching
})

export const setIncorrectCredentials = (isIncorrect) => ({
    type: INCORRECT_CREDENTIALS,
    isIncorrect
})

export const clearIncorrectError = () => ({
    type: CLEAR_INCORRECT_ERROR
})

export const saveCredentials = (email, token) => {
    return ({
        type: SAVE_CREDENTIALS,
        email,
        token
    })
}

export const submitLoginForm = (form, onSuccess=function(){}) => (dispatch) => {
    dispatch(fetchLoginForm(true))
    API.login(form.email, form.password)
        .then(response => {
            dispatch( saveCredentials(form.email, response.results.token) )
            onSuccess()
        })
        .catch((e) => {
            dispatch(setIncorrectCredentials(true))
        })
        .finally(()=>{
            dispatch(fetchLoginForm(false))
        })
}

export default authReducer