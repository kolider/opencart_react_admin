let initialState = {
    orders: [
        {id: 1, status: 'new'},
        {id: 2, status: 'processing'},
        {id: 3, status: 'done'}
    ],
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
    return state;
}





/*
const UPDATE_TEXT_STATUS = 'UPDATE-TEXT-STATUS';

export const updateTextStatusAC = (text) => {
    return {
        type: UPDATE_TEXT_STATUS,
        text: text
    }
}

let initialState = {
    posts: [
        {id: 1, text: "My post text"},
        {id: 2, text: "Hello from Moon"},
        {id: 3, text: "Life is good"}
    ],
    textStatus: '',
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_STATUS:
            return {...state, textStatus: action.text};
        default:
            return state;
    }
}*/
