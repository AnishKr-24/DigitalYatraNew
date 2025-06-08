import React, { useState } from 'react';
import {
  FaBus,
  FaPlane,
  FaTrain,
  FaExchangeAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
import './HeroTwo.scss';

export default function HeroTwo() {
  const [activeTab, setActiveTab] = useState('buses');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  // helper to format a Date() as YYYY-MM-DD
  const formatYMD = d =>
    d.toISOString().slice(0, 10);

  const handleToday = () => {
    setDate(formatYMD(new Date()));
  };

  const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(formatYMD(tomorrow));
  };

  return (
    <div className="hero-two">
      {/* Tabs */}
      <ul className="bw-tabs">
        <li
          className={activeTab === 'buses' ? 'active' : ''}
          onClick={() => setActiveTab('buses')}
        >
          <FaBus /> Buses
        </li>
        <li
          className={activeTab === 'flights' ? 'active' : ''}
          onClick={() => setActiveTab('flights')}
        >
          <FaPlane /> Flights
        </li>
        <li
          className={activeTab === 'trains' ? 'active' : ''}
          onClick={() => setActiveTab('trains')}
        >
          <FaTrain /> Trains
        </li>
         <li className="tab-text-right">
           Book Buses, Trains, &Flights
         </li>
      </ul>

      {/* Form Row */}
      <div className="bw-form">
        <div className="field">
          <label>Leaving From</label>
          <input
            type="text"
            placeholder="City or station"
            value={from}
            onChange={e => setFrom(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="swap-btn"
          onClick={() => { setFrom(to); setTo(from); }}
        >
          <FaExchangeAlt />
        </button>

        <div className="field">
          <label>Going To</label>
          <input
            type="text"
            placeholder="City or station"
            value={to}
            onChange={e => setTo(e.target.value)}
          />
        </div>

        <div className="field date-field">
          <label>Departure</label>
          <div className="date-input">
            <FaCalendarAlt />
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              min={formatYMD(new Date())} // ⬅️ Prevent past dates
            />
          </div>
        </div>

        <button className="today-btn" onClick={handleToday}>
          Today
        </button>
        <button className="tomorrow-btn" onClick={handleTomorrow}>
          Tomorrow
        </button>
        <button className="search-btn">Search</button>
      </div>
    </div>
);
}
