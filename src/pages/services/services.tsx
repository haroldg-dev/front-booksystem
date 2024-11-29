import React, { useEffect, useState } from "react";
import "./services.css";
import { Header } from "../../components/Header/header";
import { api } from "../../services/api";

interface ServiceType {
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  duration: string;
  services_id: string;
}

const Services = () => {
  const [servicesList, setServicesList] = useState<ServiceType[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/massageService");
        setServicesList(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Header activeNav="services" />
      <div className="servicesBody">
        <div className="header-title">
          <h1>Lagoon Paradise Spa</h1>
          <br />
          <h2>Vancouver</h2>
        </div>
        <div className="services-container">
          <h1>Our Services</h1>
          <div className="services-list">
            {servicesList.map((service) => (
              <div className="service-card" key={service.services_id}>
                <img
                  src={service.imgUrl}
                  alt={service.name}
                  className="service-image"
                />
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <p>Price: ${service.price}</p>
                <p>Duration: {service.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
