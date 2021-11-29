import { faFacebookF, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormControl, InputGroup, Button, Container } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <Container className="newsletter mb-5">
      <div>
        <InputGroup className="w-100">
          <FormControl
            placeholder="Your Email"
          />
          <Button
            variant="outline-secondary"
            className="px-3 button"
          >
            Subscribe
          </Button>
        </InputGroup>
      </div>
      <div className="fs-3 mx-auto">
        <FontAwesomeIcon className="me-5 link" icon={faFacebookF} />
        <FontAwesomeIcon className="me-5 link" icon={faInstagram} />
        <FontAwesomeIcon className="me-5 link" icon={faTwitter} />
        <FontAwesomeIcon className="me-5 link" icon={faYoutube} />
        <FontAwesomeIcon className="me-5 link" icon={faLinkedin} />
        <FontAwesomeIcon className="me-5 link" icon={faPinterest} />
      </div>
    </Container>
  );
};

export default Newsletter;
