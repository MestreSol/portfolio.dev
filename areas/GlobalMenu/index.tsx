"use client";
import "./styles.css";
import { useState } from "react";

export default function GlobalMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating logged-in state
  const user = {
    name: "Charlie Brown Junior",
    profileImage: "https://via.placeholder.com/40"
  };

  return (
    <nav className="MainMenu">
      <div className="container">
        <div className="BrandArea">
          <img
            className="logo"
            alt="Logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          />
          <h1>Portifolio</h1>
        </div>
        <div className="SearchArea">
          <input type="text" placeholder="Search" />
        </div>
        <div className="MenuItens">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Nodes</a>
            </li>
            <li>
              <a href="/contact">Projects</a>
            </li>
            <li>
              <a href="/contact">Notices</a>
            </li>
          </ul>
        </div>
        <div className="UserArea">
          {isLoggedIn ? (
            <>
              <img src={user.profileImage} alt="Profile" />
              <span className="username">{user.name}</span>
              <div className="dropdown">
                <a href="/profile">Profile</a>
                <a href="/settings">Settings</a>
                <a href="/logout">Logout</a>
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
