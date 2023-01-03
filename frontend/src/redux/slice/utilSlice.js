import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menu:false
}

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setMenu(state,{payload}){
        state.menu = payload
    }
  }
});

export const {setMenu} = utilSlice.actions

export default utilSlice.reducer