import React, { useState, useEffect } from "react";

const Settings: React.FC = () => {
  const [displayName, setDisplayName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    // Fetch user profile data from an API or database
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        setDisplayName(data.displayName);
        setProfilePicture(data.profilePicture);
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ displayName, profilePicture }),
      });

      if (response.ok) {
        // Handle successful profile update
        console.log("Profile updated successfully");
      } else {
        // Handle profile update error
        console.error("Profile update failed");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture URL:</label>
          <input
            type="text"
            id="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Settings;
