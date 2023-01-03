import { configureStore } from "@reduxjs/toolkit/dist";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";
import utilSlice from "./slice/utilSlice";

const store = configureStore({
    reducer:{
        user:userSlice,
        auth:authSlice,
        util:utilSlice,
    }
})

export default store