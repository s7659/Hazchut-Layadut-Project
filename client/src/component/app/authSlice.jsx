import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        role:"",
        isUserLoggedIn: localStorage.getItem("token") ? true : false,
        userFullName: ""
    },
    reducers: {
        setToken: (state, action) => {
            const token = action.payload.token
            state.token = token
            state.isUserLoggedIn = true
            localStorage.setItem("token", token)
            const userDecode = jwtDecode( token)
            const { _id, userName, name, email, phone, roles } = userDecode
            state.role=roles
        },
        removeToken: (state) => {
            state.token = ""
            state.isUserLoggedIn = false
            localStorage.removeItem("token")
        }
    }
})
export default authSlice.reducer
export const { setToken, removeToken } = authSlice.actions