import UserSlice from "./Users"

import  { configureStore } from  "@reduxjs/toolkit";


 const store = configureStore({
    reducer:{
    users: UserSlice
    }
})
export default store