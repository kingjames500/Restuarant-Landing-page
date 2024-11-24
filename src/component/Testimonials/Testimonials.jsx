import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import Chef from "../../assets/Chefs.png";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/Customer2.png";
import customer3 from "../../assets/customer3.png";

function Testimonials() {
  return (
    <div className="Testimonials-container">
      <div className="testimonials-left">
        <img className="testimonials-images" src={Chef} alt="" />
      </div>
      <div className="testimonials-right">
        <h1 className="testimonials-title">testimonials</h1>
        <h2 className="testimonials-header">
          what our customers <br />
          <span>say about us</span>
        </h2>
        <p className="testimonials-text">
          “I had the pleasure of dining at Foodi last night, and <br /> I'm
          still raving about the experience! The attention to <br /> detail in
          presentation and service was impeccable ”
        </p>
        <div className="testimonials-footer">
          <div className="customer-feedback">
            <img src={customer3} alt="" />
            <img src={customer2} alt="" />
            <img src={customer1} alt="" />
          </div>
          <div className="text-area">
            <h3>customer feedback</h3>
            <p>
              <span className="icon-feedback">
                <FaStar style={{ color: "#ffe605" }} />
                4.9
              </span>
              <p className="reviews">(18.9k Reviews)</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
