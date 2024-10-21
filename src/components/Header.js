import React, { useState } from 'react';
import './Header.css';

const Header = ({ onContactClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://deserthoppers.com/assets/images/logo.png" width="130" height="80" alt="Desert Hoppers Logo" />
        <a className="navbar-brand" href="/">Desert Hoppers</a>
      </div>

      {/* Desktop/Laptop view with Login, Sign Up, and Contact Us */}
      <div className="navbar-options">
        <div className="btn btn-success contact-us-btn" onClick={onContactClick}>
          Contact Us
        </div>
        <div className="login-btn">Login</div>
        <div className="signup-btn">Sign Up</div>
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
            <div className="btn btn-success contact-us-btn" onClick={onContactClick}>
              Contact Us
            </div>
          </li>
          <li className="nav-item">
            <div className="w-100">Login</div>
          </li>
          <li className="nav-item">
            <div className="w-100">Sign Up</div>
          </li>
        </ul>
      </div>

      {sidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar}></div>} {/* Click outside to close */}
    </nav>
  );
};

export default Header;
