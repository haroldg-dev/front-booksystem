import React from 'react';
import './about.css';
import { Header } from "../../components/Header/header"; 
const About = () => {
  return (
    <>
      <Header activeNav="book" />
    <div className="about-body">
      <div className="about-container">
        <div className="about-left">
          <h1>Welcome to Our Spa</h1>
          <p>
            At Paradise Lagoon Spa, we specialize in creating a tranquil environment for you to unwind, rejuvenate, and recharge. Our dedicated therapists use the best techniques to ensure you leave feeling renewed.
          </p>
          <p>
            Whether you are looking for a relaxing Swedish massage, a therapeutic deep tissue session, or a revitalizing aromatherapy experience, we have something tailored to your needs.
          </p>
          <p>
            Our spa is designed with your comfort in mind. From the moment you walk in, we aim to provide you with a serene and calming atmosphere where you can escape the stresses of everyday life.
          </p>
          <p>
            Thank you for choosing Relax Spa. We look forward to helping you find balance, relaxation, and wellness on your journey.
          </p>
        </div>
        <div className="about-right">
          <div className="shop-image">Paradise Lagoon Spa</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
