import React from "react";
import "./Footer.css"; // Optional: If you want to style the footer with CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <h5>KIDS CARE PLAY SCHOOL</h5>
          <p>
            We are a fun and friendly school dedicated to helping kids learn and
            grow!
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: askkidscare@gmail.com</li>
            <li>Phone: (+91)- 9334861323</li>
            <li>
              Address: Kids Care School, Shastri colony, Station road, Jamui
              811307
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a
              href="https://www.facebook.com/kidschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/kidschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/kidschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Kids School. All Rights Reserved.</p>
        <a
          href="https://www.instagram.com/im_jaisingh?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by @im_ JAI SINGH
        </a>
      </div>
    </footer>
  );
};

export default Footer;
