import React from 'react';
import './PricingCard.css'; // Import the CSS file

const PricingCard = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2>Simple, traffic-based pricing</h2>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div className="pricing-card">
        <div className="pricing-details">
          <p>100K PAGEVIEWS</p>
          <h1>$16.00 <span>/ month</span></h1>
          <div className="slider-container">
            <input type="range" min="0" max="100" className="slider" />
          </div>
          <div className="billing-options">
            <label>
              <input type="radio" name="billing" value="monthly" />
              Monthly Billing
            </label>
            <label className="radio-switch">
              <input type="radio" name="billing" value="yearly" />
              Yearly Billing <span className="discount">25% discount</span>
            </label>
          </div>
        </div>
        <div className="features">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
        </div>
        <button className="trial-button">Start my trial</button>
      </div>
    </div>
  );
};

export default PricingCard;
