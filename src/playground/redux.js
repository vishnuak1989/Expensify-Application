import { createStore } from 'redux';
import React from 'react';

const incrementCount=({incrementBy = 1}={})=>(
    {
      type:"INCREMENT",
      incrementBy
    }
);
const decrementCount = ({decrementBy = 1}={})=>(
  {
    type:"DECREMENT",
    decrementBy
  }
);
const reset = () =>(
  {
    type:"RESET"
  }
);

const set = ({count}={}) =>(
  {
    type:"SET",
    count
  }
);



const store = createStore((state={count:0},action)=>{
  const incrementBy = (typeof (action.incrementBy) === "number") ? action.incrementBy : 1;
  const decrementBy = (typeof (action.decrementBy) === "number") ? action.decrementBy : 1;
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + incrementBy}
    case 'DECREMENT':
      return {count:state.count - decrementBy}
    case 'RESET':
      return {count:0}
    case 'SET':
    return {count:action.count}
    default:

  }
  return state;
}
);

const subscribe = store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
store.dispatch(reset());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(decrementCount());
store.dispatch(set({count:101}))
