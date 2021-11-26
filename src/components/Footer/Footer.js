import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Container className="footer">
        <div>
          <h5>Get To Know Us</h5>
          <p className="link">About Crafteza HomeStore</p>
          <p className="link">About Crafteza Furniture Industries</p>
          <p className="link">Our History</p>
          <p className="link">Careers</p>
          <p className="link">News</p>
          <p className="link">Social Responsibility</p>
          <p className="link">Store Locations</p>
          <p className="link">Trade Program</p>
        </div>
        <div>
          <h5>Customer Care</h5>
          <p className="link">Help Center</p>
          <p className="link">Contact Us</p>
          <p className="link">Returns</p>
          <p className="link">Accessibility</p>
          <p className="link">Consumer Notifications</p>
          <p className="link">FAQ</p>
          <p className="link">Price Match</p>
          <p className="link">Child Safety</p>
          <p className="link">Warranty Information</p>
        </div>
        <div>
          <h5>Get Inspired</h5>
          <p className="link">Blog</p>
          <p className="link">Home Ideas</p>
          <p className="link">Digital Catalog</p>
          <p className="link">3D Room Design</p>
          <p className="link">Hope to Dream</p>
          <p className="link">Refer a Friend</p>
        </div>
      </Container>
      <p className="link" className="text-center py-3">Copyright &copy; 2021 | Crafteza</p>
    </div>
  );
};

export default Footer;
