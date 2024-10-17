// Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description, price, imageSrc }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${imageSrc})`,
        height: '400px', // Enforce fixed height
      }}
    >
      <div className="card-content-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Starts @ <strong>{price}</strong></p>
      </div>
    </div>
  );
};

export default Card;
