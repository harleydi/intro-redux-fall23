import React, {useState} from 'react'

import { useSelector, useDispatch} from 'react-redux'
import { 
  decrement, 
  increment, 
  addByAmount, 
  subtractByAmount, 
  multiplyByAmount, 
  divideByAmount 
} from "../redux/counterSlice"
import { addUser } from '../redux/usersSlice'


const Counter = () => {
    const [count, setCount] = React.useState(10)
    const [onChange, setOnChange] = useState(0)

    // useSelector - selects from the redux store
    // takes in the store (as state) as a param and selects and of reducer you specify
    const counterState = useSelector(state => state.counter.value)
    // useDispatch, unlike context, is only needed once, 
    // it works for the whole store instead of one per slice
    const dispatch = useDispatch()

    const users = useSelector(state => state.users)
    const usersArray = useSelector(state => state.users.usersArray)
    const totalAges = useSelector(state => state.users.totalAges)

  return (
    <div>Counter
    <h1>{counterState}</h1>
    <input type='number' onChange={event => setOnChange(event.target.value)} /><br/>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button><br />
    <button onClick={() => dispatch(addByAmount(onChange))}>Add {onChange}</button>
    <button onClick={() => dispatch(subtractByAmount(onChange))}>Subtract {onChange}</button>
    <button onClick={() => dispatch(multiplyByAmount(onChange))}>Mulitply {onChange}</button>
    <button onClick={() => dispatch(divideByAmount(onChange))}>Divide {onChange}</button>
    <br /><h3>----------------Users-------------------</h3><br />
    <h3>{usersArray.map(e => <p>{e.name}</p> )}</h3>
    <button onClick={() => dispatch(addUser({
      name: 'Doc',
      age: 70
    }))}>Add User</button>
    <h3>Total Users Age: {totalAges}</h3>
    <button>Add Ages</button>

    <br /><h3>----------------Local State-------------------</h3><br />
    <button onClick={() => setCount((count) => count + 1)}>
         count is {count}
    </button>
    </div>
  )
}

export default Counter