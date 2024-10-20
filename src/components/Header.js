import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://lh3.googleusercontent.com/p/AF1QipMg-pszCXabDQvYRDWC4MBZDnBLGr4XTknW6Bzw=s1360-w1360-h1020" alt="Travelwings Logo" />
      <span className="logo_text">&nbsp;&nbsp;Desert Hoppers</span>
      </div>
      <div className="contact-info">
        <a href="tel:+97145635800" className="phone-button">
          {/* <i className="phone-icon"></i> +971 4563 5800 */}+971 9999 0000
        </a>
        <span className="contact-text">CONTACT US</span>
      </div>
      <div className="account-section">
        <div className="language-currency">
          <span className="flag-icon">🇬🇧</span>
          <a href="#" className="language">EN</a> | 
          <a href="#" className="currency">AED</a>
        </div>
        <a href="#" className="account">
          <i className="account-icon">👤</i> My Account
        </a>
      </div>
    </header>
  );
};

export default Header;
