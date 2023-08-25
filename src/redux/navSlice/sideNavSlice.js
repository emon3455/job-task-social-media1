import { createSlice } from "@reduxjs/toolkit";


const sideNavSlice = createSlice({
    name: "sideNav",
    initialState: {isOpen: true},
    reducers:{
        setMenuToggle: (state, action)=>{
            state.isOpen = action.payload
        }
    }
})

export const {setMenuToggle} = sideNavSlice.actions;

export default sideNavSlice.reducer;