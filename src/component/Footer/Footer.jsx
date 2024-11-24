import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footer'>
            <h5 className='FOODI'><span>F</span>OODI</h5>
            <p>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
        </div>
        <div className='footer'>
            <h5>Useful links</h5>
            <p>About Us</p>
            <p>Events</p>
            <p>Blogs</p>
            <p>FAQ</p>
        </div>
        <div className='footer'>
            <h5>Main Menu</h5>
            <p>Home</p>
            <p>Offers</p>
            <p>Menus</p>
            <p>Reservation</p>
        </div>
        <div className='footer'>
            <h5>Contact Us</h5>
            <p>example@gmail.com</p>
            <p>+91 0000000000</p>
            <p>Social media</p>
        </div>
    </div>
  )
}

export default Footer