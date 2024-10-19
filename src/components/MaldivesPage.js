// MaldivesPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MaldivesPage.css';

const MaldivesPage = () => {
  return (
    <div>

      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: 'url(https://cdn.travelwings.com/assets/images/maldives-tour-packages.jpg)' }}>
        <div className="banner-content">
          {/* <h1>Discover the Serenity of Maldives</h1>
          <p>starting from AED 6,999</p> */}
          {/* <button className="book-now">Book Now</button> */}
        </div>
      </div>

      {/* Search and Sort Section */}
      <div className="search-sort-bar">
        <input type="text" placeholder="Search Package..." />
        <button className="sort-btn">Sort By</button>
      </div>

      {/* Package Cards */}
      <div className="package-cards container">
        <div className="package-card">
          <img src="https://cdn.travelwings.com/assets/images/Maldives-FD-3N4D-sp-small.jpg" alt="Maldives Package 1" />
          <h3>Paradise Maldives</h3>
          <p>3 Nights</p>
          <p>Starting From <strong>AED 6,999</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn">Enquire Now</button>
        </div>
        <div className="package-card">
          <img src="https://cdn.travelwings.com/assets/images/kuramathi-maldives-sp-small.jpg" alt="Maldives Package 1" />
          <h3>Kuramathi Maldives</h3>
          <p>3 Nights</p>
          <p>Starting From <strong>AED 6,999</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn">Enquire Now</button>
        </div>
        <div className="package-card">
          <img src="https://cdn.travelwings.com/assets/images/kurumba-maldives-sp-small.jpg" alt="Maldives Package 1" />
          <h3>Kurumba Maldives</h3>
          <p>3 Nights</p>
          <p>Starting From <strong>AED 7,199</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn">Enquire Now</button>
        </div>
      </div>

    </div>
  );
};

export default MaldivesPage;
