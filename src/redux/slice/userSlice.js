import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fName:'',
    lName:'',
    phone:'',
    address:'',
    emirates:'',
    package:'',
    email:'',
    password:''
}

const userSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setFName(state,{payload}){state.fName=payload},
    setLName(state,{payload}){state.lName=payload},
    setPhone(state,{payload}){state.phone=payload},
    setAddress(state,{payload}){state.address=payload},
    setEmirates(state,{payload}){state.emirates=payload},
    setPackage(state,{payload}){state.package=payload},
    setEmail(state,{payload}){state.email=payload},
    setPassword(state,{payload}){state.password=payload},
  }
});

export const {setFName,setLName,setPhone,setAddress,setEmirates,setPackage,setEmail,setPassword} = userSlice.actions

export default userSlice.reducer