import React from 'react'
import logo from '../assets/3.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-slate-900 p-5 text-white'>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <img className='w-[70px] rounded-full cursor-pointer' src={logo} alt="" />
                </div>
                <div className='flex items-center justify-between gap-10'>
                    <Link to = '/' className='text-xl font-semibold hover:bg-slate-500 p-3 rounded-md transition-all duration-700'>Background</Link>
                    <Link to = '/hooks' className='text-xl font-semibold hover:bg-slate-500 p-3 rounded-md transition-all duration-700'>Hooks</Link>
                    <Link to = '/background' className='text-xl font-semibold hover:bg-slate-500 p-3 rounded-md transition-all duration-700'>Background</Link>
                </div>
                <div>
                    <input className='bg-amber-50 text-black p-2 rounded-md outline-none' type="search" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar