import axios from "axios";

import {store} from '../store/store'
import { setLoading } from "../store/userSlice";




export const axiosInstance = axios.create({
    baseURL: "/api",
})

axiosInstance.interceptors.request.use(
    (config) => {
    store.dispatch(setLoading(true));
    return config;
  },
  (error) => {
    store.dispatch(setLoading(false)); 
    return Promise.reject(error);
  }
)

axiosInstance.interceptors.response.use(
    (config) => {
        store.dispatch(setLoading(false)); 
        return config
    },
    (error) => {
        // store.dispatch(setLoading(false)); 
        return Promise.reject(error)
    }
)