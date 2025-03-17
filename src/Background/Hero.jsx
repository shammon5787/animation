import React from 'react'
import pause from '../assets/pause.png'
import play from '../assets/play.png'

const Hero = ({playstatus, hercount, herodata, setherocount, setplayStatus}) => {
  return (
    <div className='mt-20 font-bold text-4xl'>
        <h1>Hello word</h1>

        <div className='absolute bottom-10 right-10 flex flex-col items-center'>
            <h1 className='font-semibold text-2xl text-slate-800'>Video Control Here</h1>
            {/* <hr /> */}
            <img className='w-[55px] h-[55px] cursor-pointer bg-white rounded-full outline-none' onClick={()=>setplayStatus(!playstatus)} src= {playstatus ? pause : play} alt="" />
        </div>
    </div>
  )
}

export default Hero