import { configureStore } from "@reduxjs/toolkit/dist";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer:{
        user:userSlice,
        auth:authSlice
    }
})

export default store