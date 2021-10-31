import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.APP_URL
})

export default api

export const baseURL = () => 'http://127.0.0.1:8000'