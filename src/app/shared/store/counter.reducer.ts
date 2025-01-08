import { createReducer, on } from "@ngrx/store"
import { customerIncrement, decrement, increment, reset } from "./counter.actions"
import { intialialState } from "./counter.state"

const _counterReducer = createReducer(
  intialialState,
  on(increment, (state)=>{
  return{
    ...state,
    counter:state.counter+1
  }
}),
on(decrement, (state)=>{
  return{
    ...state,
    counter:state.counter-1
  }
}),
on(reset, (state)=>{
  return{
    ...state,
    counter:5
  }
}),

on(customerIncrement, (state, action)=>{
  return{
    ...state,
    counter:state.counter
  }
})
)

export function counterReducer(state:any, action:any ){
  return _counterReducer(state, action)

}
