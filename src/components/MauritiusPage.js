// MauritiusPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MauritiusPage.css';

const MauritiusPage = () => {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: 'url(MAURITIUS_BANNER.jpg)' }}>
        <div className="banner-content">
          <h1>Experience the Magic of Mauritius</h1>
          <p>starting from AED 6,750</p>
          <button className="book-now">Book Now</button>
        </div>
      </div>

      {/* Search and Sort Section */}
      <div className="search-sort-bar">
        <input type="text" placeholder="Search Package..." />
        <button className="sort-btn">Sort By</button>
      </div>

      {/* Package Cards */}
      <div className="package-cards">
        {/* Repeat for each package */}
        <div className="package-card">
          <img src="mauritius_package1.jpg" alt="Mauritius Package 1" />
          <h3>Mesmerizing Mauritius</h3>
          <p>4 Nights</p>
          <p>Starting From <strong>AED 6,750</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn">Enquire Now</button>
        </div>
        {/* Add more packages as needed */}
      </div>

      <Footer />
    </div>
  );
};

export default MauritiusPage;
