import React from "react"; 
import "./booking.css"; 
import { Header } from "../../components/Header/header"; 

function Booking() {
  return (
    <>
      <Header activeNav="book" />
      <section id="booking_hero" className="d-flex justify-content-center">
        <div className="container d-flex flex-column align-items-center p-5">
          <h1 className="text-center text-white mb-4">Book Your Spa Experience</h1>
          <form className="booking-form">
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label text-white">Name</label>
              <input type="text" id="name" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="date" className="form-label text-white">Booking Date</label>
              <input type="date" id="date" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="service" className="form-label text-white">Service</label>
              <select id="service" className="form-select">
                <option>Choose a Service</option>
                <option>Massage Therapy</option>
                <option>Facial Treatments</option>
                <option>Body Scrubs</option>
              </select>
            </div>
            <button type="submit" className="btn btn-light w-100 mt-3">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

// Varsayılan export ekledik
export default Booking;
