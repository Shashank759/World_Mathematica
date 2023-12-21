import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import "./ContactUs.styles.scss";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <h2>Contact Us</h2>
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: +1 123-456-7890</li>
      </ul>
      <div className="SocailMedia">
        <h3>Connect with us on Social Media</h3>
        <ul className="icons">
          <li>
            <a href="https://www.facebook.com/example" className="facebook social" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/example" className="instagram social" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/example" className="youtube social" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
    
  );
};

export default ContactUs;