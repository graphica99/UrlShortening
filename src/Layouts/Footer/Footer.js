import React from "react";
import Logo from "../../images/logo.svg";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";
export default function Footer() {
  return (
    <footer>
      <div className="footer__main">
        <div className="footer__logo-container">
          <img src={Logo} className="footer__logo" />
        </div>
        <div className="footer__nav-items">
          <p className="u-mb-small">Features</p>
          <ul className="footer__nav-item-container">
            <li className="footer__nav-item">Link Shortening</li>
            <li className="footer__nav-item"> Branded Links</li>
            <li className="footer__nav-item">Analytics</li>
          </ul>
        </div>

        <div className="footer__nav-items">
          <p className="u-mb-small"> Resources</p>
          <ul className="footer__nav-item-container">
            <li className="footer__nav-item">Blog</li>
            <li className="footer__nav-item"> Developers</li>
            <li className="footer__nav-item">Support</li>
          </ul>
        </div>

        <div className="footer__nav-items">
          <p className="u-mb-small">Company</p>
          <ul className="footer__nav-item-container">
            <li className="footer__nav-item">About</li>
            <li className="footer__nav-item">Our Team</li>
            <li className="footer__nav-item">Careers</li>
            <li className="footer__nav-item">Contact</li>
          </ul>
        </div>

        <div className="footer__nav-social">
          <a href="#">
            <img src={Facebook} />
          </a>
          <a href="#">
            <img src={Twitter} />
          </a>
          <a href="#">
            <img src={Pinterest} />
          </a>
          <a href="#">
            <img src={Instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}
