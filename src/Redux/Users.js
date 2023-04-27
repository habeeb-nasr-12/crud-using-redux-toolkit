import { createSlice } from '@reduxjs/toolkit'
import fakeUsers from './data'
const UserSlice = createSlice({
    name: "users",
    initialState: { value: fakeUsers },
    reducers: {
        addUser: (state, action) => {
            //push value to fake users 
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((ele) => { return ele.id != action.payload.id })
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if (user.id == action.payload.id) {
                    user.username = action.payload.newusername
                    
                }

            })

        }
    }
})
export const { updateUser,addUser,deleteUser } = UserSlice.actions

export default UserSlice.reducer