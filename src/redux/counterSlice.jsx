import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',  //needs to be unique, should be the same as the function name, w/o Slice
    initialState: {
        value: 0
    },
    // reducers to set the state
    reducers: {
        increment: (state, action) => {
            state.value = state.value + 1
            // state.value += 1
            // state.value++
        },
        decrement: (state) => {
            state.value -= 1
        },
        addByAmount: (state, action) => {
            console.log(action);
            state.value += parseInt(action.payload)
        },
        subtractByAmount: (state, action) => {
            state.value -= parseInt(action.payload)
        },
        multiplyByAmount: (state, action) => {
            return {
                value: state.value * parseInt(action.payload)
            }
        },
        divideByAmount: (state, action) => {
            let newValue = {
                value: state.value / parseInt(action.payload)
            }
            return newValue
        }
    }
})

// Action creators are generated for each reducer function (from above), basically sets up dispatch
export const { 
    increment, 
    decrement, 
    addByAmount, 
    subtractByAmount, 
    multiplyByAmount, 
    divideByAmount 
} = counterSlice.actions

// essentially does this behind the scenes
// const reducerName = param => dispatch({
//     type: slice_name/reducer_name,
//     payload: param
// })
// const increment = param => dispatch({
//     type: counter/increment,
//     payload: param
// })

export default counterSlice.reducer