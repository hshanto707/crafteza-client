import React from 'react';
import { Container } from 'react-bootstrap';
import './Brands.css'

const Brands = () => {
  return (
    <div>
      <h2 className="text-center pb-5 fw-bold">Our Trusted Brands</h2>
      <Container className="brand-container">
        <img src="https://templates.hibootstrap.com/ecop/default/assets/images/brand/brand1.png" alt="" className="brand" />
        <img src="https://templates.hibootstrap.com/ecop/default/assets/images/brand/brand4.png" alt="" className="brand" />
        <img src="https://templates.hibootstrap.com/ecop/default/assets/images/brand/brand7.png" alt="" className="brand" />
        <img src="https://templates.hibootstrap.com/ecop/default/assets/images/brand/brand5.png" alt="" className="brand" />
        <img src="https://templates.hibootstrap.com/ecop/default/assets/images/brand/brand2.png" alt="" className="brand" />
        <img src="https://templates.hibootstrap.com/ecop/default/assets/images/brand/brand6.png" alt="" className="brand" />
        <img src="https://templates.hibootstrap.com/ecop/default/assets/images/brand/brand3.png" alt="" className="brand" />
      </Container>
    </div>
  );
};

export default Brands;