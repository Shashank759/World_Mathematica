import React from 'react';
import './Footer.styles.scss'

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
