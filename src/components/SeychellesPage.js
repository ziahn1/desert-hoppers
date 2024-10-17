// SeychellesPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './SeychellesPage.css';

const SeychellesPage = () => {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: 'url(SEYCHELLES_BANNER.jpg)' }}>
        <div className="banner-content">
          <h1>Escape to Seychelles</h1>
          <p>starting from AED 5,999</p>
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
          <img src="seychelles_package1.jpg" alt="Seychelles Package 1" />
          <h3>Seychelles Adventure</h3>
          <p>3 Nights</p>
          <p>Starting From <strong>AED 5,999</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn">Enquire Now</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SeychellesPage;
