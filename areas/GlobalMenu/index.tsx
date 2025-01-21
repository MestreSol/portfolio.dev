"use client";
import React from "react";
import "./styles.css";
import { useState } from "react";
import BrandArea from "@/components/BrandArea";
import SearchArea from "@/components/SearchArea";

export default function GlobalMenu() {
  const [isLoggedIn] = useState(true); // Simulating logged-in state
  const user = {
    name: "Charlie Brown Junior",
    profileImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  };

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Nodes", url: "/about" },
    { name: "Projects", url: "/contact" },
    { name: "Notices", url: "/contact" },
  ];

  return (
    <nav className="MainMenu">
      <div className="Menu">
        <BrandArea />
        <SearchArea />
        <div className="MenuItens">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="UserArea">
          {isLoggedIn ? (
            <>
              <img src={user.profileImage} alt="Profile" />
              <span className="username">{user.name.split(" ")[0]}</span>
              <div className="dropdown">
                <span>▼</span>
                <div className="dropdown-content">
                  <a href="/profile">Profile</a>
                  <a href="/settings">Settings</a>
                  <a href="/logout">Logout</a>
                </div>
              </div>
            </>
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
}
