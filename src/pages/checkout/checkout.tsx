import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className="checkoutBody">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <p className="checkout-intro">Review your selections and complete your booking.</p>

        <div className="checkout-section">
          <h2>Your Booking</h2>
          <div className="checkout-details">
            <div className="checkout-item">
              <p className="item-title">Swedish Massage</p>
              <p className="item-description">A relaxing full-body massage to ease tension.</p>
              <p className="item-price">$120</p>
            </div>
          </div>
        </div>

        <div className="checkout-summary">
          <h2>Summary</h2>
          <p className="summary-line">
            Subtotal: <span>$120</span>
          </p>
          <p className="summary-line">
            Tax: <span>$15</span>
          </p>
          <p className="summary-line total">
            Total: <span>$135</span>
          </p>
        </div>

        <button className="checkout-button">Complete Booking</button>
      </div>
    </div>
  );
};

export default Checkout;
