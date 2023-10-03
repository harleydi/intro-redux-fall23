import { createSlice } from "@reduxjs/toolkit";



export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersArray: [
            {
                name: 'Grumpy',
                age: 60
            },
            {
                name: 'Sleepy',
                age: 50
            },
            {
                name: 'Happy',
                age: 40
            },
            {
                name: 'Dopey',
                age: 10
            }
        ],
        totalAges: 0
    },
    reducers: {
        addUser: (state, action) => {
            state.usersArray.push(action.payload)
        }
    }
})
