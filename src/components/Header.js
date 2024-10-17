import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/150x50?text=Travelwings" alt="Travelwings Logo" />
      </div>
      <div className="contact">
        <span>Contact Us</span>
        <a href="tel:+97145635800" className="phone-number">+971 4563 5800</a>
      </div>
      <div className="account">
        <a href="#" className="currency">AED</a>
        <a href="#" className="login">My Account</a>
      </div>
    </header>
  );
};

export default Header;
