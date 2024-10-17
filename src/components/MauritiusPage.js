// MauritiusPage.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import EnquiryFormModal from './EnquiryFormModal';

const MauritiusPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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

      {/* Package Cards */}
      <div className="package-cards">
        <div className="package-card">
          <img src="mauritius_package1.jpg" alt="Mauritius Package 1" />
          <h3>Mesmerizing Mauritius</h3>
          <p>4 Nights</p>
          <p>Starting From <strong>AED 6,750</strong></p>
          <button className="details-btn">View Details</button>
          <button className="enquire-btn" onClick={handleShowModal}>Enquire Now</button>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      <EnquiryFormModal show={showModal} handleClose={handleCloseModal} destination="Mesmerizing Mauritius" />

      <Footer />
    </div>
  );
};

export default MauritiusPage;
