import React, { useState, useEffect } from "react";

const EditContent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch existing post data from an API or database
    const fetchPostData = async () => {
      try {
        const response = await fetch(`/api/content/${postId}`);
        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (postId !== null) {
      fetchPostData();
    }
  }, [postId]);

  const handleEditContent = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/content/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        // Handle successful content update
        console.log("Content updated successfully");
      } else {
        // Handle content update error
        console.error("Content update failed");
      }
    } catch (error) {
      console.error("Error during content update:", error);
    }
  };

  return (
    <div className="edit-content">
      <h2>Edit Content</h2>
      <form onSubmit={handleEditContent}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditContent;
