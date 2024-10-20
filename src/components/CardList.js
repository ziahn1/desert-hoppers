import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const destinations = [
  { title: 'MALDIVES', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/maldives-holiday-thumb.jpeg', path: '/maldives' },
  { title: 'MAURITIUS', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/switzerland-holiday-thumb.jpeg', path: '/mauritius' },
  { title: 'SEYCHELLES', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/image_2022_03_28T09_57_36_352Z.png', path: '/seychelles' },
  { title: 'INDONESIA', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/indonesia.jpg', path: '/indonesia' },
  { title: 'KENYA', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/kenya-holiday-thumb.jpeg', path: '/kenya' },
  { title: 'MALAYSIA', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/malaysia.jpg', path: '/malaysia' },
  { title: 'TURKEY', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/turkey-holiday-thumb.jpg', path: '/turkey' },
  { title: 'THAILAND', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/Thailand%20%281%29.png', path: '/thailand' },
  { title: 'EGYPT', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/small_egypt.png', path: '/egypt' },
  { title: 'JORDAN', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/jordan-holiday-thumb.jpeg', path: '/jordan' },
  { title: 'KYRGYZSTAN', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/kyrgyzstan-holiday-thumb.jpeg', path: '/kyrgyzstan' },
  { title: 'KAZAKHSTAN', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/kazakhstan-.jpg', path: '/kazakhstan' },
  { title: 'UZBEKISTAN', description: 'All Inclusive Package', price: 'AED 6,999', imageSrc: 'https://cdn.travelwings.com/assets/images/Uzbekistan.jpg', path: '/uzbekistan' },
  { title: 'USA', description: 'All Inclusive Package', price: 'AED 6,750', imageSrc: 'https://cdn.travelwings.com/assets/images/usa.jpg', path: '/usa' },
  { title: 'UNITED KINGDOM', description: 'All Inclusive Package', price: 'AED 5,999', imageSrc: 'https://cdn.travelwings.com/assets/images/uk-holiday-thumb.jpeg', path: '/uk' },
  { title: 'SAUDI ARABIA', description: 'All Inclusive Package', price: 'AED 4,399', imageSrc: 'https://cdn.travelwings.com/assets/images/saudi-holiday-thumb.jpg', path: '/saudi' },
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
