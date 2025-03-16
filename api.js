import axios from "axios";

const API_URI = "http://localhost:3000/blogs";

export const getBlogs = async () => {
    const response = await axios.get(API_URI);
    return response.data;
};

export const createBlog = async (blogData) => {
    const response = await axios.post(API_URI, blogData);
    return response.data;
};

export const updateBlog = async (id, blogData) => {
    const response = await axios.put(`${API_URI}/${id}`, blogData);
    return response.data;
};

export const deleteBlog = async (id) => {
    const response = await axios.delete(`${API_URI}/${id}`);
    return response.data;
};

