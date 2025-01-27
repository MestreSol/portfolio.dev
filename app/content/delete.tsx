import React, { useState } from "react";

const DeleteContent: React.FC = () => {
  const [postId, setPostId] = useState<number | null>(null);

  const handleDeleteContent = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/content/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle successful content deletion
        console.log("Content deleted successfully");
      } else {
        // Handle content deletion error
        console.error("Content deletion failed");
      }
    } catch (error) {
      console.error("Error during content deletion:", error);
    }
  };

  return (
    <div className="delete-content">
      <h2>Delete Content</h2>
      <form onSubmit={handleDeleteContent}>
        <div>
          <label htmlFor="postId">Post ID:</label>
          <input
            type="number"
            id="postId"
            value={postId ?? ""}
            onChange={(e) => setPostId(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteContent;
