import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { useBlogContext } from '../context/BlogContext'

const Blogs = () => {
  const { fetchAllBlogs } = useBlogContext()
  const [blogs, setBlogs] = useState([])

  const handleFetchBlogs = async () => {
    const res = await fetchAllBlogs()
    console.log("res=>", res)
    setBlogs(res.data)  // Fixed duplication issue
    console.log("blog=>", res.data)
  }

  useEffect(() => {
    handleFetchBlogs()
  }, [])  // Run only once on component mount

  return (
    <div className='grid grid-cols-3 gap-10 px-10 py-10'>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  )
}

export default Blogs
