import React from "react";
import "./services.css";
import { Header } from "../../components/Header/header";

const Services = () => {
  const servicesList = [
    { title: "Swedish Massage", description: "A relaxing full-body massage to ease tension.", image: require("../../assets/swedish.jpg") },
    { title: "Deep Tissue Massage", description: "Targets deeper layers of muscles to relieve chronic pain.", image: require("../../assets/deep-tissue-massage.jpg") },
    { title: "Hot Stone Massage", description: "Warm stones are used to relax and soothe muscles.", image: require("../../assets/hot-stone.jpg") },
    { title: "Aromatherapy Massage", description: "Combines essential oils with gentle massage techniques.", image: require("../../assets/aromatherapy.jpg") },
    { title: "Thai Massage", description: "Focuses on stretching and deep pressure points for healing.", image: require("../../assets/Thai-massage.jpg") },
  ];

  return (
    <>
    <Header activeNav="home" />
    <div className="servicesBody">
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="services-list">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h2>{service.title}</h2>
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
