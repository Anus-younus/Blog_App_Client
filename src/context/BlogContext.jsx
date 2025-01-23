import { createContext, useContext } from "react";

const BlogContext = createContext(null)

const BlogContextProvider = ({ children }) => {

    const handleAddBlog = async (title, description, tag) => {
        const token = localStorage.getItem('TOKEN');  // No need to parse
    
        const res = await fetch("http://localhost:5000/blog/addBlog", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, tag })
        });
    
        const json = await res.json();
        console.log(json);
    };
    
    const fetchAllBlogs = async () => {
        const res = await fetch("http://localhost:5000/blog/fetchAllBlogs")
        const json = await res.json()
        return json
    }


    return (
        <BlogContext.Provider value={{ handleAddBlog, fetchAllBlogs }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider
export const useBlogContext = () => useContext(BlogContext)