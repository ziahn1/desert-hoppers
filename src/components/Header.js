import React, { useState } from 'react';
import './Header.css';

const Header = ({ onContactClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://deserthoppers.com/assets/images/logo.png" width="130" height="80" alt="Desert Hoppers Logo"></img>
        <a className="navbar-brand" href="/">Desert Hoppers</a>
      </div>

      {/* Desktop/Laptop view with Login, Sign Up, and Contact Us */}
      <div className="navbar-options">
        <button type="button" className="btn btn-success contact-us-btn" onClick={onContactClick}>
          Contact Us
        </button>
        <button type="button" className="btn btn-outline-dark login-btn">Login</button>
        <button type="button" className="btn btn-outline-dark signup-btn">Sign Up</button>
      </div>

      {/* Mobile hamburger menu */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button type="button" className="btn btn-success w-100" onClick={onContactClick}>
              Contact Us
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-outline-dark w-100">Login</button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-outline-dark w-100">Sign Up</button>
          </li>
        </ul>
      </div>

      {sidebarOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
    </nav>
  );
};

export default Header;