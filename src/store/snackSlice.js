import { createSlice } from "@reduxjs/toolkit";
import { removeCookie } from "../utils/cookies";


const snackSlice = createSlice({
    name: "snack",
    initialState: {
        open: false,
        message: "",
        isLogin: false,
        userName: ""
    },
    reducers: {
        handleClick: (state, action) => {
            state.open = true
        },
        handleClose: (state, action) => {
            state.open = false
        },
        handleMessage: (state, action) => {
            state.message = action.payload;
        },
        login: (state, action) => {
            state.isLogin = true
            state.userName = action.payload
        },
        logout: (state) => {
            removeCookie('token');
            removeCookie('name');

            state.isLogin = false;
            state.userName = null;
        },
    }
})

export default snackSlice.reducer;
export const { handleClick, handleClose, handleMessage, login, logout } = snackSlice.actions;