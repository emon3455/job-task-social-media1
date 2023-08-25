import  {configureStore }  from  "@reduxjs/toolkit";
import sideNavReducer from "./navSlice/sideNavSlice"

const store = configureStore({
    reducer:{
        sideNav: sideNavReducer
    }
})

export default store;