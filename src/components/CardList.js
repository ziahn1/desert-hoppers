// CardList.js
import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const destinations = [
  { title: 'MALDIVES', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'MALDIVES.jpg', path: '/maldives' },
  { title: 'MAURITIUS', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'MAURITIUS.jpg', path: '/mauritius' },
  { title: 'SEYCHELLES', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'SEYCHELLES.jpeg', path: '/seychelles' },
  { title: 'INDONESIA', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'INDONESIA.jpeg', path: '/indonesia' },
];

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        {destinations.map((destination, index) => (
          <div className="col-md-3" key={index}>
            <Card 
              title={destination.title} 
              description={destination.description} 
              price={destination.price} 
              imageSrc={destination.imageSrc} 
              path={destination.path} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
