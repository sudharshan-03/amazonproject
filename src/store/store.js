import { configureStore } from "@reduxjs/toolkit";
import snackReducer from '../store/snackSlice'
import userReducer from '../store/userSlice'


export const store = configureStore({
    reducer: {
        snack: snackReducer,
        user: userReducer,
    }
})