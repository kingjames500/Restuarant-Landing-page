import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LuSalad } from "react-icons/lu";
import { IoCartOutline, IoGiftOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

function Services() {
  return (
    <div className='servicesContainer'>
        <div className='about-services'>
            <h6>OUR STORY & SERVICES</h6>
            <h3>Our Culinary Journey <br />
                And Services</h3>
            <p>
            Rooted in passion, we curate unforgettable dining <br /> experiences `
            and offer exceptional services, <br /> blending culinary artistry with 
            warm hospitality. 
            </p>
            <button className='btn'>Explore</button>
        </div>
        <div className='services-content'>
            <div className='service-card'>
                <div className='icon'><LuSalad />
                </div>
                <h5>CATERING</h5>
                <p>Delight your guests with our flavors and  presentation</p>
            </div>
            <div className='service-card'>
                <div className='icon'><IoMdTime />
                </div>
                <h5>FAST DELIVERY</h5>
                <p>We deliver your order promptly to your door</p>
            </div>
            <div className='service-card'>
                <div className='icon'><IoCartOutline />
                </div>
                <h5>ONLINE ORDERING</h5>
                <p>Explore menu & order with ease using our Online Ordering </p>
            </div>
            <div className='service-card'>
               <div className='icon'><IoGiftOutline/>
               </div>
                <h5>GIFT CARDS</h5>
                <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
            </div>
        </div>
    </div>
  )
}

export default Services