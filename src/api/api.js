import axios from "axios";

const SET_ORDER_OF_MANAGER = "SET_ORDER_OF_MANAGER"

const instance = axios.create({
    baseURL: `http://localhost:7000/api/`
});

export const API = {
    getMe: () => {
      return instance.get('me')
          .then(response=>{
              console.log("api.js response")
              console.log(response)
              return response
          }).catch(e=>{
              console.log("api.js error")
              console.log(e)
              return false
          })
    },
    login: (email, password) => {
        return instance.post('login', {
            email, password
        }).then(response=>(response.data))
    },
    getOrders: () => {
        return instance.get('orders/new')
    },
    setOrderToMe: (order_id) => {
        return instance.post(`/orders/order/${order_id}`, {action: SET_ORDER_OF_MANAGER})
    },
    setToken: (token) => {
        instance.interceptors.request.use(function (config) {
            config.headers.Authorization =  token ? `Bearer ${token}` : '';
            return config;
        });
    }
}