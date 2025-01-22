import React from "react";
import Profile from "@/components/Profile";

export default function Home() {
  const mockUser = {
    userName: "string",
    userDescription: "string",
    userFollowers: 1000,
    userNodes: 1000,
    userProjects: 1000,
    userImage: "string",
    userWallpaper: "string",
  };
  return (
    <div>
      <Profile
        userName={mockUser.userName}
        userDescription={mockUser.userDescription}
        userFollowers={mockUser.userFollowers}
        userNodes={mockUser.userNodes}
        userProjects={mockUser.userProjects}
        userImage={mockUser.userImage}
        userWallpaper={mockUser.userWallpaper}
      />
    </div>
  );
}
