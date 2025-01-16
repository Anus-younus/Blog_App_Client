import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Blogs from './Blogs'
import SignUp from './SignUp'
import Login from './Login'

const Layout = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default Layout