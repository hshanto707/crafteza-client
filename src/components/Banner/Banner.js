import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex g-5">
      <img
        className="banner-img d-block me-auto"
        src="https://templates.hibootstrap.com/ecop/default/assets/images/buy-main1.png"
        alt="First slide"
      />
      <Container>
        <div className="banner-title text-right">
          <h1>Buy Best Furniture At A Cheaper Rate</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
