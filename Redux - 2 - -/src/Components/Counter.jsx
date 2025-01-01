import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from '../Redux/action';
import { decrement } from '../Redux/action';
import { reset } from '../Redux/action';


const Counter = () => {
    const dispatch = useDispatch()
  const countval = useSelector((state) => {
    return state.count;
  });
  return  <>
  <p>Count : {countval}</p>
  <button onClick={()=>{dispatch(increment(10))}}>+10</button>
  <button onClick={()=>{dispatch(reset())}}>Reset</button>
  <button onClick={()=>{dispatch(decrement(5))}}>-5</button>
</>
}

export default Counter