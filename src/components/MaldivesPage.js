// MaldivesPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MaldivesPage.css';

const MaldivesPage = () => {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: 'url(MALDIVES_BANNER.jpg)' }}>
        <div className="banner-content">
          <h1>Discover the Serenity of Maldives</h1>
          <p>starting from AED 6,999</p>
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
        <div className="package-card">
          <img src="maldives_package1.jpg" alt="Maldives Package 1" />
          <h3>Paradise Maldives</h3>
          <p>5 Nights</p>
          <p>Starting From <strong>AED 6,999</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn">Enquire Now</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaldivesPage;
