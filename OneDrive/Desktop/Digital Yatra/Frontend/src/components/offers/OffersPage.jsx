import React from 'react';
import BusOffers from './BusOffers';
import TrainOffers from './TrainOffers';
import FlightOffers from './FlightOffers';

export default function OffersPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>All Offers</h1>
      <BusOffers />
      <TrainOffers />
      <FlightOffers />
    </div>
  );
}
