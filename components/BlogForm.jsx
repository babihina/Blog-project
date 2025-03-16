import React, { useState } from "react";

const BlogForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({title:"",content:"",author:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({title:"",content:"",author:""});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({...formData,title:e.target.value})}
      />
      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({...formData,content:e.target.value})}
      ></textarea>
       <input
        type="text"
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default BlogForm;