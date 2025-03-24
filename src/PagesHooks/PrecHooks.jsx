import React, { useState } from 'react'

const PrecHooks = () => { 
   const [count ,setcount] = useState(0)
   const [text, settext] = useState("hello")
   const add = ()=>{
    const newc = count + 1
    setcount(newc)
   }
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>{
        add()
        settext(!text)
       }}  className='bg-blue-950 cursor-pointer p-2 rounded-md font-semibold uppercase'>Increase</button>
       {
         text && <h1>Here Text Show</h1>
       }
    </div>
  )
}

export default PrecHooks