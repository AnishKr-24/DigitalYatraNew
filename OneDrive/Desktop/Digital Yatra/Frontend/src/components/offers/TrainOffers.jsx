import React from 'react';
import './TrainOffers.scss';

const offers = [
  {
    title: 'Superfast Train Deal',
    discount: '₹100 Off',
    code: 'TRAIN100',
  },
  {
    title: 'Weekend Express Saver',
    discount: '₹150 Off',
    code: 'WEEKEND150',
  },
  {
    title: 'Senior Citizen Offer',
    discount: '10% Off',
    code: 'SENIOR10',
  },
  {
    title: 'Early Bird Train',
    discount: '₹200 Off',
    code: 'EARLY200',
  },
  {
    title: 'Student Discount',
    discount: '₹120 Off',
    code: 'STUDENT120',
  },
  {
    title: 'Festival Rail Sale',
    discount: '₹250 Off',
    code: 'FESTIVAL250',
  },
];

export default function TrainOffers() {
  return (
    <div className="train-offers">
      <h2>Train Booking Offers</h2>
      <ul>
        {offers.map((offer, index) => (
          <li key={index} className="offer-card">
            <h3>{offer.title}</h3>
            <p><strong>Discount:</strong> {offer.discount}</p>
            <p><strong>Use Code:</strong> <code>{offer.code}</code></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
