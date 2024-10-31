import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Collection from "../../components/collection/collection";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiTwotoneBulb } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";

import "./homepage.css";
export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home-page-wrapper">
        <div className="hero-section">
          <div className="hero-content">
            <p className="hero-text">Summer Collection</p>
            <h3 className="hero-heading">
              Fall -{" "}
              <span>
                Winter <br /> Collection
              </span>{" "}
              2025
            </h3>
            <p className="hero-text-2">
              A Specialist label creativity luxury essentials. Ethically crafted
              with an unwavering commitment to exceptional quality.
            </p>
            <button className="hero-button"> Shop Now</button>
          </div>
        </div>
        <Collection />
        <div className="what-we-do">
          <h1 className="what-we-do-heading">What we do</h1>
          <div className="what-we-do-box">
            <div className="what-we-do-card">
              <div className="card-head">
                <MdOutlineShoppingCart className="card-icon" />
                <h6>Shop for latest wears</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur iste dolore amet commodi porro esse dignissimos iure
                aliquam nulla placeat?
              </p>
            </div>
            <div className="what-we-do-card">
              <div className="card-head">
                <AiTwotoneBulb className="card-icon" />
                <h6>Request for measurment for a style</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem assumenda porro perferendis at quibusdam atque
                inventore saepe nulla
              </p>
            </div>
            <div className="what-we-do-card">
              <div className="card-head">
                <TbTruckDelivery className="card-icon" />
                <h6>Get your wears delivered to you </h6>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam reiciendis harum nostrum eum nobis officiis quasi
                quas est minima labore?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
