import React, { useState } from 'react';
import { FaBus, FaExchangeAlt, FaCalendarAlt } from 'react-icons/fa';
import './Main.scss';

export default function Bus() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Ahmedabad'];

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
      {/* Title/Header */}
      <ul className="bw-tabs single-tab">
        <li className="active">
          <FaBus /> Buses
        </li>
        <li className="tab-text-right">Book Your Bus</li>
      </ul>

      {/* Booking Form */}
      <div className="bw-form">
        <div className="field">
          <label>Leaving From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="" disabled>Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
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
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="" disabled>Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="field date-field">
          <label>Departure</label>
          <div className="date-input">
            <FaCalendarAlt />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={formatYMD(new Date())}
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
