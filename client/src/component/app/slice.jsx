import { createSlice } from "@reduxjs/toolkit"

const initVal = {
    token: localStorage.getItem("token")
}

const Slice = createSlice({
    name: "List",
    initialState: initVal,
    reducers: {
        updateNewUser: (state, action) => {
            state.newUser = action.payload.data
        },
        updateUserName: (state, action) => {
            state.userName = action.payload.data
        },
        updateUserId: (state, action) => {
            state.userId = action.payload.data
        },
    }
})
export const { updateNewUser, updateUserName, updateUserId } = Slice.actions
export default Slice.reducer