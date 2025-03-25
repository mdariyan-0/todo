import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        logPrompt : false,
    },
    reducers: {
        updateLogValue : (state, action) => {
            state.logPrompt = action.payload;
        }
    }
})

export const {updateLogValue} = userSlice.actions
export default userSlice.reducer;