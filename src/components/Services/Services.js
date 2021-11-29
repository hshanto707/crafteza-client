import { faGifts, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <Container>
      <div className="services">
        <div className="service">
          <FontAwesomeIcon icon={faTruck} className="service-icon" />
          <div>
            <h4>Free Delivery</h4>
            <p className="m-0">
              No matter where you live we will send your order without any
              shipping cost.
            </p>
          </div>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faHeadset} className="service-icon" />
          <div>
            <h4>24/7 Online Support</h4>
            <p className="m-0">
              Have a question about your orders? Give us a call. We are always
              here for you.
            </p>
          </div>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faGifts} className="service-icon" />
          <div>
            <h4>Weekly Gift Voucher</h4>
            <p className="m-0">
              Who doen't love gifts? We provide weekly gift voucher to our
              special clients.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
