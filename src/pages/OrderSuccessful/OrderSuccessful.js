import React from 'react';
import { NavLink } from "react-router-dom";
import './OrderSuccessful.css'

const OrderSuccessful = () => {
  return (
    <div className="order-successful">
      <img src="https://www.kindpng.com/picc/m/133-1339688_party-emoji-png-transparent-png.png" alt="" />
      <h2>Your Order Is Completed!</h2>
      <h5>
        You Will Be Recieving A Confirmation Email With Your Order Details.
      </h5>
      <NavLink to="/all-products" className="link">
        <h5>Explore More Products</h5>
      </NavLink>
    </div>
  );
};

export default OrderSuccessful;