import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./booking.css";
import { Header } from "../../components/Header/header";
import { api } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

function Booking() {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    service: "",
  });
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name ||
      !formData.date ||
      formData.service === "Choose a Service"
    ) {
      alert("Please fill in all fields");
      return;
    }

    navigate("/checkout", { state: formData });
  };

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/person/${userId}`);
      const firstName = response.data.firstName;
      const lastName = response.data.lastName;
      setFormData({ ...formData, name: `${firstName}  ${lastName}` });
    }

    fetchUser();
  }, []);

  return (
    <>
      <Header activeNav="book" />
      <section id="booking_hero" className="d-flex justify-content-center">
        <div className="container d-flex flex-column align-items-center p-5">
          <h1 className="text-center text-white mb-4">
            Book Your Spa Experience
          </h1>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="date" className="form-label text-white">
                Booking Date
              </label>
              <input
                type="date"
                id="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="service" className="form-label text-white">
                Service
              </label>
              <select
                id="service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Choose a Service</option>
                <option>Swedish Massage</option>
                <option>Deep Tissue Massage</option>
                <option>Hot Stone Massage</option>
                <option>Aromatherapy Massage</option>
                <option>Thai Massage</option>
              </select>
            </div>
            <button type="submit" className="btn btn-light w-100 mt-3">
              Book Now!
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Booking;
