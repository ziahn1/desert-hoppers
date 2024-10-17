// IndonesiaPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './IndonesiaPage.css';

const IndonesiaPage = () => {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: 'url(INDONESIA_BANNER.jpg)' }}>
        <div className="banner-content">
          <h1>Explore Indonesia</h1>
          <p>starting from AED 4,399</p>
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
          <img src="indonesia_package1.jpg" alt="Indonesia Package 1" />
          <h3>Bali Getaway</h3>
          <p>4 Nights</p>
          <p>Starting From <strong>AED 4,399</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn">Enquire Now</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndonesiaPage;
