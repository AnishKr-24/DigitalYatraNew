import React from 'react';
import './FlightOffers.scss';

const offers = [
  {
    title: 'Domestic Flight Deal',
    discount: '₹500 Off',
    code: 'FLY500',
  },
  {
    title: 'International Special',
    discount: '₹1000 Off',
    code: 'INT1000',
  },
  {
    title: 'Weekend Flyer',
    discount: '15% Off',
    code: 'WEEKEND15',
  },
  {
    title: 'Student Flight Offer',
    discount: '₹750 Off',
    code: 'STUDENT750',
  },
  {
    title: 'Festival Flight Bonanza',
    discount: '₹1200 Off',
    code: 'FESTIVALFLY',
  },
  {
    title: 'Morning Flight Saver',
    discount: '₹600 Off',
    code: 'MORNING600',
  },
];

export default function FlightOffers() {
  return (
    <div className="flight-offers">
      <h2>Flight Booking Offers</h2>
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
