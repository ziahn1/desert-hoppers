import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div class="banner-section">
        {/* Replace with the actual path to your image */}
        <img src={`${process.env.PUBLIC_URL}/images/banner-image.jpg`} alt="Banner" />
      </div>
    </section>
  );
};

export default Banner;
