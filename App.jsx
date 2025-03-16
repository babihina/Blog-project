import { useState, useEffect } from "react";
import React from "react";
import { createBlog, getBlogs,updateBlog,deleteBlog} from "./api";
import BlogForm from "./components/Blogform";
import EditBlog from "./components/Editblog";
import BlogList from "./components/Bloglist";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    console.log(data);
    setBlogs(data);
  };

  const handleCreateBlog = async (newBlog) => {
    await createBlog(newBlog);
    fetchBlogs();
  };

  const handleEditingBlog = (blog) => {
    setEditBlog(blog);
  };

  const handleUpdateBlog = async (updatedBlog) => {
    try {
      await updateBlog(updatedBlog._id, updatedBlog);
      setEditBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error("update failed", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await deleteBlog(id);
      fetchBlogs(); 
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div>
      <h1>My Blog Posts</h1>
      {!editBlog ? (
        <BlogForm onCreate={handleCreateBlog} />
      ) : (
        <EditBlog blog={editBlog} onUpdate={handleUpdateBlog} />
      )}
      <BlogList blogs={blogs} onEdit={handleEditingBlog}
      onDelete={handleDeleteBlog} />
    </div>
  );
}

export default App;
