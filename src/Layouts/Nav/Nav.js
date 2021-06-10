import React from "react";
// import HandBurger from "../../images/icon-hamburger.svg";
import Logo from "../../images/logo.svg";
export default function Nav() {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} className="nav__logo" />
        {/* <div className='nav__right'> */}
        <div className="nav__left">
          <ul className="nav__items">
            <li className="nav__item">Features</li>
            <li className="nav__item">Pricing</li>
            <li className="nav__item">Resources</li>
          </ul>
        </div>
        <div>
          <a href="#" className="nav__login">
            Login
          </a>
          <a href="#" className="nav__signup btn">
            Sign Up
          </a>
        </div>

        {/* <div className="nav__handburger">
          <input type="checkbox" className="nav__checked" id="toggle" />
          <label for="toggle">
            <img src={HandBurger} className="nav_handburger-icon" />
          </label>
        </div> */}
      </nav>
    </header>
  );
}
