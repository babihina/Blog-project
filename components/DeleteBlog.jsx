import React from "react";

const DeleteBlog = ({ blogId, onDelete }) => {
  const handleDelete = () => {
    onDelete(blogId);
  };

  return (
    <button style={styles.deleteButton} onClick={handleDelete}>
      Delete
    </button>
  );
};

const styles = {
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default DeleteBlog;
