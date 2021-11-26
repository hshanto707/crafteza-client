import { faFacebookF, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormControl, InputGroup, Button, Container } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <Container className="newsletter my-5">
      <div>
        <InputGroup className="w-100">
          <FormControl
            placeholder="Your Email"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            className="px-3"
          >
            Subscribe
          </Button>
        </InputGroup>
      </div>
      <div className="fs-3 mx-auto">
        <FontAwesomeIcon className="me-5" icon={faFacebookF} />
        <FontAwesomeIcon className="me-5" icon={faInstagram} />
        <FontAwesomeIcon className="me-5" icon={faTwitter} />
        <FontAwesomeIcon className="me-5" icon={faYoutube} />
        <FontAwesomeIcon className="me-5" icon={faLinkedin} />
        <FontAwesomeIcon className="me-5" icon={faPinterest} />
      </div>
    </Container>
  );
};

export default Newsletter;
