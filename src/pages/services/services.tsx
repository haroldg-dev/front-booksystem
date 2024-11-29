import React, { useEffect, useState } from "react";
import "./services.css";
import { Header } from "../../components/Header/header";
import { api } from "../../services/api";
import { ServicesModal } from "../../components/ServicesModal/services_modal";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Track selected service for the modal

  const handleServiceClick = (service: Service) => {
    setSelectedService(service); // Set the clicked service for the modal
  };

  const handleModalClose = () => {
    setSelectedService(null); // Close the modal
  };

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await api.get("/massageService");
        setServices(response.data); // Set the services from the API
      } catch (error) {
        console.error("Error fetching services", error);
      }
    }

    fetchServices();
  }, []);

  return (
    <>
      <Header activeNav="services" />
      <div className="servicesBody">
        <div className="header-title">
          <h1>Paradise Lagoon Spa</h1>
          <br />
          <h2>Vancouver</h2>
        </div>
        <div className="services-container">
          <h1>Our Services</h1>
          <div className="services-list">
            {services.map((service, index) => (
              <div
                className="service-card"
                key={index}
                onClick={() => handleServiceClick(service)}
              >
                <img
                  src={service.imgUrl}
                  alt={service.name}
                  className="service-image"
                />
                <h2>{service.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Show modal only when a service is selected */}
      {selectedService && (
        <ServicesModal
          show={!!selectedService} // Show modal if selectedService is not null
          onHide={handleModalClose}
          service={selectedService} // Pass selected service to modal
        />
      )}
    </>
  );
};

export default Services;
