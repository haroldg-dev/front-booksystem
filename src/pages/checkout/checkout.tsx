import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import "./checkout.css";
import { api } from "../../services/api";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Added navigate
  const bookingData = location.state || {};
  const [isConfirmed, setIsConfirmed] = useState(false);

  const servicesInfo: {
    [key: string]: { description: string; price: number };
  } = {
    "Swedish Massage": {
      description: "A relaxing full-body massage to ease tension.",
      price: 120,
    },
    "Deep Tissue Massage": {
      description: "Targets deeper layers of muscles to relieve chronic pain.",
      price: 150,
    },
    "Hot Stone Massage": {
      description: "Warm stones are used to relax and soothe muscles.",
      price: 140,
    },
    "Aromatherapy Massage": {
      description: "Combines essential oils with gentle massage techniques.",
      price: 130,
    },
    "Thai Massage": {
      description: "Focuses on stretching and deep pressure points for healing.",
      price: 135,
    },
  };

  const selectedService = servicesInfo[bookingData.service] || {
    description: "Unknown service",
    price: 0,
  };

  const handleCompleteBooking = async () => {
    try {
      const bookingPayload = {
        customerEmail: bookingData.email,
        customerName: bookingData.name,
        bookingDate: bookingData.date,
        status: "confirmed",
        service: bookingData.service,
        serviceDescription: selectedService.description,
      };

      await api.post("/booking", bookingPayload);
      setIsConfirmed(true);
    } catch (error) {
      console.error("Failed to create booking:", error);
      alert("Failed to complete booking. Please try again.");
    }
  };

  return (
    <div className="checkoutBody">
      <div className="checkout-container">
        <h1>Checkout</h1>

        {isConfirmed ? (
          <div className="confirmation-message">
            <h2>Booking Confirmed!</h2>
            <p>
              <strong>Name:</strong> {bookingData.name || "N/A"}
            </p>
            <p>
              <strong>Service:</strong> {bookingData.service || "N/A"}
            </p>
            <p>
              <strong>Date:</strong> {bookingData.date || "N/A"}
            </p>
            <p>
              <strong>Total:</strong> ${selectedService.price * 1.125}
            </p>
            <p className="thank-you">Thank you for booking with us!</p>
            {/* Back Button */}
            <button
              className="return-button"
              onClick={() => navigate(-1)} // Navigate back to the previous page
            >
              Back to Booking
            </button>
          </div>
        ) : (
          <>
            <p className="checkout-intro">
              Review your selections and complete your booking.
            </p>

            <div className="checkout-section">
              <h2>Your Booking</h2>
              <div className="checkout-details">
                <div className="checkout-item">
                  <p className="item-title">{bookingData.service}</p>
                  <p className="item-description">
                    {selectedService.description}
                  </p>
                  <p className="item-price">${selectedService.price}</p>
                </div>
              </div>
            </div>

            <div className="checkout-summary">
              <h2>Summary</h2>
              <p className="summary-line">
                Subtotal: <span>${selectedService.price}</span>
              </p>
              <p className="summary-line">
                Tax: <span>${(selectedService.price * 0.125).toFixed(2)}</span>
              </p>
              <p className="summary-line total">
                Total:{" "}
                <span>${(selectedService.price * 1.125).toFixed(2)}</span>
              </p>
            </div>

            <button className="checkout-button" onClick={handleCompleteBooking}>
              Complete Booking
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
