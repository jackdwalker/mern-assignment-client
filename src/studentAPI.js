import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_EXPRESS_ACCESS_POINT,
    crossDomain: true
})
