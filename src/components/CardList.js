import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const destinations = [
  { title: 'MALDIVES', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/maldives-holiday-thumb.jpeg', path: '/maldives' },
  { title: 'MAURITIUS', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/switzerland-holiday-thumb.jpeg', path: '' },
  { title: 'SEYCHELLES', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/image_2022_03_28T09_57_36_352Z.png', path: '' },
  { title: 'INDONESIA', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/indonesia.jpg', path: '' },
  { title: 'KENYA', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/kenya-holiday-thumb.jpeg', path: '' },
  { title: 'MALAYSIA', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/malaysia.jpg', path: '' },
  { title: 'TURKEY', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/turkey-holiday-thumb.jpg', path: '' },
  { title: 'THAILAND', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/Thailand%20%281%29.png', path: '' },
  { title: 'EGYPT', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/small_egypt.png', path: '' },
  { title: 'JORDAN', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/jordan-holiday-thumb.jpeg', path: '' },
  { title: 'KYRGYZSTAN', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/kyrgyzstan-holiday-thumb.jpeg', path: '' },
  { title: 'KAZAKHSTAN', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/kazakhstan-.jpg', path: '' },
  { title: 'UZBEKISTAN', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/Uzbekistan.jpg', path: '' },
  { title: 'USA', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/usa.jpg', path: '' },
  { title: 'UNITED KINGDOM', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/uk-holiday-thumb.jpeg', path: '' },
  { title: 'SAUDI ARABIA', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/saudi-holiday-thumb.jpg', path: '' },
];

const CardList = () => {
  return (
    <div className="container">
      <div className="row gx-4 gy-4"> {/* Added gap between rows and columns */}
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
