import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import ChatAI from "../chatTool/ChatAI.jsx";
import Logo from "../../assets/rocket.png";
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon from react-icons

export default function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle
  const { state, dispatch } = useAuth();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span>Space</span>
          <span className="t">T</span>
          <span>ec</span>
          <span className="logo-rocket" style={{ marginLeft: "1vh" }}>
            <img src={Logo} alt="rocket" height={40} />
          </span>
          <div className="bottomLine"></div>
        </Link>
      </div>
      <div className="console">
        <span>CON</span>
        <span className="s">S</span>
        <span>OLE</span>
      </div>
      <div className={`buttons ${isMenuOpen ? "open" : ""}`}>
       
        <div className="chat-container-ai">
          <ChatAI />
        </div>
        {state.isAuthenticated ? (
          <div style={{ display: "flex", gap: "2px" }}>
            <div className="login-button">{state.user.email}</div>
            <button className="login-button" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="s-l-b" style={{ display: "flex", gap: "2px" }}>
            <Link to="/signUp">
              <button className="signup-button">SIGNUP</button>
            </Link>
            <Link to="/login">
              <button className="login-button">LOGIN</button>
            </Link>
          </div>
        )}
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
}
