// Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, price, imageSrc, path }) => {
  return (
    <Link to={path} className="card-link">
      <div className="card">
        <img src={imageSrc} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-price">Starts @ {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
