import React, { useState } from 'react';
import {
  FaTrain,
  FaExchangeAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
// import './HeroTwo.scss';

export default function Train() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const formatYMD = (d) => d.toISOString().slice(0, 10);

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
      {/* Header */}
      <ul className="bw-tabs single-tab">
        <li className="active">
          <FaTrain /> Trains
        </li>
        <li className="tab-text-right">Book Your Train</li>
      </ul>

      {/* Booking Form */}
      <div className="bw-form">
        <div className="field">
          <label>Leaving From</label>
          <input
            type="text"
            placeholder="City or station"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="swap-btn"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
        >
          <FaExchangeAlt />
        </button>

        <div className="field">
          <label>Going To</label>
          <input
            type="text"
            placeholder="City or station"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="field date-field">
          <label>Departure</label>
          <div className="date-input">
            <FaCalendarAlt />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={formatYMD(new Date())} // No past dates
            />
          </div>
        </div>

        <button className="today-btn" onClick={handleToday}>Today</button>
        <button className="tomorrow-btn" onClick={handleTomorrow}>Tomorrow</button>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}
