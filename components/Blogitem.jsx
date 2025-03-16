import React from 'react';
import DeleteBlog from "./DeleteBlog";

const Blogitem = ({ blog, onEdit, onDelete }) => {
    return (
        <li style={styles.blogItem}>
            <h2 style={styles.title}>{blog.title}</h2>
            <p style={styles.content}>{blog.content}</p>
            <small style={styles.author}>By {blog.author}</small>
            <div style={styles.buttonContainer}>
                <button style={styles.editButton} onClick={() => onEdit(blog)}>Edit</button>
                <DeleteBlog blogId={blog._id} onDelete={onDelete} />
            </div>
        </li>
    );
};

const styles = {
    blogItem: {
        backgroundColor: "#f9f9f9",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        listStyle: "none",
    },
    title: {
        fontSize: "22px",
        color: "#333",
        marginBottom: "10px",
    },
    content: {
        fontSize: "16px",
        color: "#555",
        marginBottom: "10px",
    },
    author: {
        fontSize: "14px",
        fontStyle: "italic",
        color: "#888",
    },
    buttonContainer: {
        marginTop: "10px",
    },
    editButton: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "8px 12px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginRight: "10px",
    },
};

export default Blogitem;

