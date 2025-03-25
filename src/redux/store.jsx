import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/slice/todoSlice";
import userSlice from "../redux/slice/userSlice"
import loginSlice from "../redux/slice/loginSlice"

const store = configureStore({
    reducer:{

        todos: todoSlice,
        user: userSlice,
        login: loginSlice,
    },
   
})

export default store;