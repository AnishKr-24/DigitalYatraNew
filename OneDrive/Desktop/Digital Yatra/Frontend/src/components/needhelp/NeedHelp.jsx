import React from 'react';
import { BiPhoneCall, BiMailSend, BiChat } from 'react-icons/bi';
import './NeedHelp.scss';

export default function NeedHelp() {
  return (
    <div className="need-help">
      <h2>Need Help?</h2>
      <p className="subheading">Our support team is here for you 24/7</p>

      <div className="help-options">
        <div className="help-card">
          <BiPhoneCall className="icon" />
          <h3>Call Us</h3>
          <p>+91 6200**2982</p>
        </div>

        <div className="help-card">
          <BiMailSend className="icon" />
          <h3>Email Us</h3>
          <p>support@indutravel.com</p>
        </div>

        <div className="help-card">
          <BiChat className="icon" />
          <h3>Live Chat</h3>
          <p>Chat with our travel expert</p>
        </div>
      </div>
    </div>
  );
}
