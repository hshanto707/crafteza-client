import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h5>
        The Page You Are Looking For Doesn't exist Or An Other Error Occured.
      </h5>
      <NavLink to="/" className="link">
        <h5>Go To Home Page</h5>
      </NavLink>
    </div>
  );
};

export default NotFound;
