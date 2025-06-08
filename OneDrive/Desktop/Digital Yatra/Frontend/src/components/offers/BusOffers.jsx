import React from 'react';
import './BusOffers.scss';
// import busImg from '../picture/Bus.png'; // adjust path as per your folder structure

const offers = [
  {
    title: 'Celebrate with a Champion Deal!',
    discount: '18% Off',
    code: 'CELEBRATING18',
  },
  {
    title: 'Whistle Podu Offer',
    discount: '₹500 Off',
    code: 'WHISTLEPODU',
    // image: Bus,
  },
  {
    title: 'ICICI Net Banking',
    discount: '10% Off',
    code: 'ABIBICI',
  },
  {
    title: 'Summer Bonanza',
    discount: '₹1000 Voucher',
    code: 'SUMMER1000',
  },
  {
    title: 'Summer Sale',
    discount: '₹500 Off',
    code: 'SUMMER2025',
  },
  {
    title: 'Wedding Special',
    discount: '₹500 Off',
    code: 'WEDDINGS',
  },
];

export default function BusOffers() {
  return (
    <div className="bus-offers">
      <h2>Bus Booking Offers</h2>
      <ul>
        {offers.map((offer, index) => (
          <li key={index} className="offer-card">
            {offer.image && (
              <img src={offer.image} alt={offer.title} className="offer-image" />
            )}
            <h3>{offer.title}</h3>
            <p><strong>Discount:</strong> {offer.discount}</p>
            <p><strong>Use Code:</strong> <code>{offer.code}</code></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
