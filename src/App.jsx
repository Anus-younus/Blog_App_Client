import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Blogs from './pages/Blogs'
import AddBlog from './pages/AddBlog'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/addBlog' element={<AddBlog />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App