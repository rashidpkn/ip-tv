import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menu:false,
    dashboardMenu : 1,
}

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setMenu(state,{payload}){
        state.menu = payload
    },
    setDashboardMenu(state,{payload}){
      state.dashboardMenu = payload
    }
  }
});

export const {setMenu,setDashboardMenu} = utilSlice.actions

export default utilSlice.reducer