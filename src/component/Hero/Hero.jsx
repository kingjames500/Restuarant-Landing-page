import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../../assets/images/hero image.png";
import browseAll from "../../assets/images/vegetable salad.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__title">
          Dive into Delights Of Delectable <span> Food</span>
        </h2>
        <p className="hero__description">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="hero__buttons">
          <button className="hero__button">Order Now</button>

          <span>Watch Video</span>
          <button className="hero__button-video">
            <FontAwesomeIcon icon={faPlay} className="hero__icon" />
          </button>
        </div>
      </div>
      <div
        className="image"
        style={{ flexDirection: "column", justifyContent: "flex-end" }}
      >
        <div className="hero__image">
          <img src={heroImage} alt="Delicious Food" />
        </div>
        <div className="menucards">
          <div className="card">
            <div className="card-image">
              <img src={browseAll} alt="Spicy Noodles" />
            </div>
            <div className="card-details">
              <h4>Spicy Noodles</h4>
              <div className="rating">⭐⭐⭐⭐</div>
              <p className="price">
                {" "}
                <span>$</span> 12.99
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={browseAll} alt="Grilled Chicken" />
            </div>
            <div className="card-details">
              <h4>Grilled Chicken</h4>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p className="price">
                <span>$</span> 15.99
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return <Hero />;
};

export default HeroSection;
