import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Planet Hackunia</div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <div className="navbar-item"><Link to="/" onClick={toggleMenu}>Home</Link></div>
        <div className="navbar-item"><Link to="/map" onClick={toggleMenu}>Map</Link></div>
        <div className="navbar-item"><Link to="/survival-guide" onClick={toggleMenu}>Survival Guide</Link></div>
        <div className="navbar-item"><Link to="/chat" onClick={toggleMenu}>Chat</Link></div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>&#9776;</div>
    </nav>
  );
};

export default Navbar;
