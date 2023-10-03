import { configureStore } from '@reduxjs/toolkit'

//import slices here as reducer
import counterReducer from './counterSlice'
import usersReducer from './usersSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,  //key name is the name of the redux state, value is the imported reducer
        users: usersReducer
    }
})