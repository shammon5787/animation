import React from 'react'
import pause from '../assets/pause.png'
import play from '../assets/play.png'

const Hero = ({playstatus, hercount, herodata, setherocount, setplayStatus}) => {
  return (
    <div >
        <div className='text-3xl font-bold absolute top-28 left-10 bg-slate-800 rounded-md p-3 opacity-80 text-white'>
            <h1>{herodata.text1}</h1>
            <h1>{herodata.text2}</h1>
        </div>

        <ul className='absolute top-3/6 flex flex-row items-center gap-10 bg-slate-900 opacity-70 p-4 left-10'>
            <li onClick={()=>setherocount(0)} className='text-black bg-white rounded-full cursor-pointer ' >⨀</li>
            <li onClick={()=>setherocount(1)} className='text-black bg-white rounded-full cursor-pointer ' >⨀</li>
            <li onClick={()=>setherocount(2)} className='text-black bg-white rounded-full cursor-pointer ' >⨀</li>
        </ul>

        <div className='absolute bottom-10 right-10 flex flex-col items-center'>
            <h1 className='font-semibold text-2xl text-slate-800'>Video Control Here</h1>
            {/* <hr /> */}
            <img className='w-[55px] h-[55px] cursor-pointer bg-white rounded-full outline-none' onClick={()=>setplayStatus(!playstatus)} src= {playstatus ? pause : play} alt="" />
        </div>
    </div>
  )
}

export default Hero