import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fname:'',
    lname:'',
    phone:'',
    address:'',
    emirates:'',
    packages:3,
    email:'',
    password:'',
}

const userSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setFName(state,{payload}){state.fname=payload},
    setLName(state,{payload}){state.lname=payload},
    setPhone(state,{payload}){state.phone=payload},
    setAddress(state,{payload}){state.address=payload},
    setEmirates(state,{payload}){state.emirates=payload},
    setPackage(state,{payload}){state.packages=payload},
    setEmail(state,{payload}){state.email=payload},
    setPassword(state,{payload}){state.password=payload},
  }
});

export const {setFName,setLName,setPhone,setAddress,setEmirates,setPackage,setEmail,setPassword} = userSlice.actions

export default userSlice.reducer