import React, { useReducer, useState } from 'react'

const reducer = (state, action)=>{
  switch(action.type){
    case "Increment":
      return
      {
        count : state.count +1
        text : state.text
      }
  }

}

const PrecHooks = () => { 

const [state, dispatch] = useReducer(reducer , {count : 0, text: true})
   
  return (
    <div>
       <h1>{state.count}</h1>
       <button onClick={()=>{
        dispatch({type: "Increment"})
       }}  className='bg-blue-950 cursor-pointer p-2 rounded-md font-semibold uppercase'>Increase</button>
       <h1>This is text</h1>
    </div>
  )
}

export default PrecHooks