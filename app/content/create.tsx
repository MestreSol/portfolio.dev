import React, { useState } from "react";

const CreateContent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreateContent = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        // Handle successful content creation
        console.log("Content created successfully");
      } else {
        // Handle content creation error
        console.error("Content creation failed");
      }
    } catch (error) {
      console.error("Error during content creation:", error);
    }
  };

  return (
    <div className="create-content">
      <h2>Create New Content</h2>
      <form onSubmit={handleCreateContent}>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateContent;
