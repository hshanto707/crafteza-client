import React from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <Carousel variant="dark" className="hero" style={{marginBottom: "100px"}}>
      <Carousel.Item>
        <img
          className="hero-img d-block ms-auto"
          src="https://templates.hibootstrap.com/ecop/default/assets/images/banner/banner1.png"
          alt="First slide"
        />
        <Container>
          <div className="hero-title">
            <h1>Get All Trendy Furniture In Our One Store</h1>
            <p>
              Exclusively for our customers, we will deliver your furniture to
              you front door.
            </p>
          </div>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="hero-img d-block ms-auto"
          src="https://templates.hibootstrap.com/ecop/default/assets/images/banner/banner2.png"
          alt="Second slide"
        />

        <Container>
          <div className="hero-title">
            <h1>Find Out Your Best Furniture Here</h1>
            <p>
              We provide quality furniture.
            </p>
          </div>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
