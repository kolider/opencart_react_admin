import API from "./api"

export const _toRemove_login = async (email, password) => {
    let response = await API.get('_toRemove_login', {
        params: {
            email, password
        }
    })
    return response
}