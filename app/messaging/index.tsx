import React, { useState, useEffect } from "react";

const Messaging: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch messages from an API or database
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newMessage }),
      });

      if (response.ok) {
        // Handle successful message sending
        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, data]);
        setNewMessage("");
      } else {
        // Handle message sending error
        console.error("Message sending failed");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="messaging">
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <div>
          <label htmlFor="newMessage">New Message:</label>
          <input
            type="text"
            id="newMessage"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messaging;
