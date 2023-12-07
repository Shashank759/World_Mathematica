import React from 'react';
import Footer from '../../Component/Footer/Footer';
import "./ContactUs.styles.scss";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us via the following methods or through our
        social media channels.
      </p>
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: +1 123-456-7890</li>
      </ul>
      <div>
        <h3>Connect with us on Social Media</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;