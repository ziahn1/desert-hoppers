import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, price, imageSrc, path }) => {
  return (
    <Link to={path} className="card-link">
      <div className="card">
        <img src={imageSrc} alt={title} />
        <div className="card-content-overlay">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-price">Starts @ {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
