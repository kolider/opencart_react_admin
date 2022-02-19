import API from "./api"

export const login = async (email, password) => {
    let response = await API.get('login', {
        params: {
            email, password
        }
    })
    return response
}