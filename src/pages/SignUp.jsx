import React, { useState } from 'react'
import { useUserContext } from '../context/UserContext'

const SignUp = () => {
    const { handlesignupUser } = useUserContext()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col py-20 px-9 gap-5 shadow shadow-blue-600 rounded-sm'>
                <h2 className='text-3xl text-center font-medium mb-10'>Sign up</h2>
                <input value={name} onChange={(e) => {
                    setName(e.target.value)
                }} className='border border-gray-400 py-2 outline-none rounded-md px-10' placeholder='Username' type="text" />
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} className='border border-gray-400 py-2 outline-none rounded-md px-10' placeholder='@gmail.com' type="email" />
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} className='border border-gray-400 py-2 outline-none rounded-md px-10' placeholder='*****' type="password" />
                <button onClick={() => { handlesignupUser(name, email, password,) }} className='px-5 py-3 bg-blue-600 rounded-md text-white text-base'>Sign up</button>
            </div>
        </div>
    )
}

export default SignUp