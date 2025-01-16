import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-5 py-4 border-b border-gray-200'>
            <h1 className='text-3xl font-bold'>BLOG APP</h1>
            {false && <ul className='flex gap-8 text-lg'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/blogs"}>Blogs</Link></li>
            </ul>}
            <div className='flex gap-4'>
                <button className='px-5 py-3 bg-blue-600 rounded-md text-white text-base'><Link to={"/signup"}>Sign up</Link></button>
                <button className='px-5 py-3 bg-blue-600 rounded-md text-white text-base'><Link to={"/login"}>Login</Link></button>
            </div>
        </div>
    )
}

export default Navbar