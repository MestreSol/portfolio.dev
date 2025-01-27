import React, { useEffect, useState } from "react";
import "./styles.css";

const UserProfile: React.FC = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });

  useEffect(() => {
    // Fetch user data from an API or database
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        setUser({
          name: data.name,
          email: data.email,
          profilePicture: data.profilePicture,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-profile">
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-email">{user.email}</p>
    </div>
  );
};

export default UserProfile;
