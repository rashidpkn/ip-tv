import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginStatus:false,
    role:''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus(state,{payload}){
        state.loginStatus = payload
    },
    setRole(state,{payload}){
      state.role = payload
    }
  }
});

export const {setLoginStatus,setRole} = authSlice.actions

export default authSlice.reducer