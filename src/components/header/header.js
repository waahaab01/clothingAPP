import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";

import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <p>
          <span>Clothing</span> App
        </p>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Sign Up</li>
        </ul>
      </div>
      <div className="searchBar-icons-wrapper">
        <div className="searchBar">
          <input
            type="text"
            name=""
            id=""
            placeholder="What are you looking for?"
          />
          <FaSearch style={{color:"grey",fontWeight:"400"}}/>
        </div>
        <div className="nav-icon-wrapper">
        <FiHeart style={{fontSize:"25px"}}/>
        <CgShoppingCart style={{fontSize:'25px',paddingLeft:"10px"}}/>
        </div>
        
      </div>
    </div>
  );
}
