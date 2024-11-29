import React, { useEffect, useState } from "react";
import "./services.css";
import { Header } from "../../components/Header/header";
import { api } from "../../services/api";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  console.log(services);

  const servicesList = [
    {
      title: "Swedish Massage",
      description: "A relaxing full-body massage to ease tension.",
      image: require("../../assets/swedish.jpg"),
    },
    {
      title: "Deep Tissue Massage",
      description: "Targets deeper layers of muscles to relieve chronic pain.",
      image: require("../../assets/deep-tissue-massage.jpg"),
    },
    {
      title: "Hot Stone Massage",
      description: "Warm stones are used to relax and soothe muscles.",
      image: require("../../assets/hot-stone.jpg"),
    },
    {
      title: "Aromatherapy Massage",
      description: "Combines essential oils with gentle massage techniques.",
      image: require("../../assets/aromatherapy.jpg"),
    },
    {
      title: "Thai Massage",
      description:
        "Focuses on stretching and deep pressure points for healing.",
      image: require("../../assets/Thai-massage.jpg"),
    },
  ];

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
          <h1>Lagoon Paradise Spa</h1>
          <br />
          <h2>Vancouver</h2>
        </div>
        <div className="services-container">
          <h1>Our Services</h1>
          <div className="services-list">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img
                  src={service.imgUrl}
                  alt={service.name}
                  className="service-image"
                />
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
