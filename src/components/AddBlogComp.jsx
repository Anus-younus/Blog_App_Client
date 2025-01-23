import React, { useState } from 'react'
import { useBlogContext } from '../context/BlogContext'

const AddBlogComp = () => {
    const [title, setTile] = useState("")
    const [desc, setDesc] = useState("")
    const [tag, setTag] = useState("")

    const { handleAddBlog } = useBlogContext()

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col py-20 px-9 gap-5 shadow shadow-blue-600 rounded-sm'>
                <h2 className='text-3xl text-center font-medium mb-10'>Add Blog</h2>
                <input value={title} onChange={(e) => { setTile(e.target.value) }} className='border border-gray-400 py-2 outline-none rounded-md px-10' type="text" placeholder='title' />
                <input value={tag} onChange={(e) => { setTag(e.target.value) }} className='border border-gray-400 py-2 outline-none rounded-md px-10' type="text" placeholder='tag' />
                <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} className='border border-gray-400 py-2 outline-none rounded-md px-10' name="" placeholder='description' id=""></textarea>
                <button onClick={() => { handleAddBlog(title, desc, tag) }} className='px-5 py-3 bg-blue-600 rounded-md text-white text-base'>Add Blog</button>
            </div>
        </div>
    )
}

export default AddBlogComp