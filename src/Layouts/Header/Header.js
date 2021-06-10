import React from "react";
import HeaderImage from "../../images/illustration-working.svg";
export default function Header() {
  return (
    <section className="header">
      <div className="header__main">
        <div className="header__text">
          <h1 className="header__text1 u-mb-small">
            More than just <br />
            shorter links
          </h1>
          <p className="header__paragraph u-mb-medium">
            Build your brand’s recognition and get detailed <br /> insights on
            how your links are performing.
          </p>
          <a href="#" className="btn u-mb-small">
            Get Started
          </a>
        </div>
        <div className="header__image-container">
          <img src={HeaderImage} className="header__image" />
        </div>
      </div>
    </section>
  );
}
