import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import './footer.css'



export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section-1">
        <h6>Clothing App</h6>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div>
          <input type="email" placeholder="Enter your Email" />
          <button type="submit" className="email-button">
            <MdOutlineDoubleArrow />
          </button>
        </div>
      </div>
      <div className="footer-section-2">
        <h6>Support</h6>
        <p>Lahore,Pakistan</p>
        <p>clothingapp@gmail.com</p>
        <p>+92**********</p>
      </div>
      <div className="footer-section-3">
        <h6>Account</h6>
        <p>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="footer-section-4">
        <h6>Quick Links</h6>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="footer-section-5">
        <CiFacebook className="icon"/>
        <FaInstagram className="icon"/>
        <FiTwitter className="icon"/>
        <AiOutlineLinkedin className="icon"/>
      </div>
    </div>
  );
}
