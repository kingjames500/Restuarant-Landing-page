import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../../assets/images/hero image.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Dive into Delights Of Delectable{" "}
          <span className="highlight">Food</span>
        </h1>
        <p className="hero-subtitle">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="hero-buttons">
          <button className="order-button">Order Now</button>
          <button className="watch-button">
            Watch Video
            <FontAwesomeIcon icon={faPlay} className="play-icon" />
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="spicy-tag">
          Hot spicy Food <FontAwesomeIcon icon={faPepperHot} />
        </div>
        <img src={heroImage} alt="Delicious Food" />
        <div className="food-cards">
          <div className="food-card">
            <img
              src="/path-to-spicy-noodles.jpg"
              alt="Spicy Noodles"
              className="food-image"
            />
            <div className="food-info">
              <p className="food-name">Spicy noodles</p>
              <div className="food-rating">★★★★☆</div>
              <p className="food-price">$18.00</p>
            </div>
          </div>
          <div className="food-card">
            <img
              src="/path-to-vegetarian-salad.jpg"
              alt="Vegetarian Salad"
              className="food-image"
            />
            <div className="food-info">
              <p className="food-name">Vegetarian salad</p>
              <div className="food-rating">★★★★★</div>
              <p className="food-price">$23.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
