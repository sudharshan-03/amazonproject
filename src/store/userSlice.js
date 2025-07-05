import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        mobile: "",
        password: "" ,
        isLoading: false
    },
    reducers: {
        handleCreditials: (state, action) => {
            state.mobile = action.payload.mobile;
            state.password = action.payload.password;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export default userSlice.reducer;
export const {handleCreditials, setLoading} = userSlice.actions;