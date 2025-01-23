import React from 'react'
import img from "../assets/doww.png"

const BlogCard = ({ blog }) => {
  return (
    <div className='shadow-[#a8a6a6dd] shadow-lg py-10 px-5'>
      <div className='flex-[3]'>
        <img src={img} alt="" />
      </div>
      <div className='flex-[1]'>
        <h1 className='text-3xl font-bold mb-3'>{blog.title}</h1>
        <p className='text-[#4b4a4a] mb-3'>{blog.description}</p>
        <span>{blog.tag}</span>
      </div>
    </div>
  )
}

export default BlogCard