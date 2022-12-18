import React from "react";
import img1 from "../assests/images/img-1.jpg";
import img2 from "../assests/images/img-2.jpg";
import img3 from "../assests/images/img-3.jpg";

export default function Header() {
  return (
    <div className="header bg">
      <header>
        <nav>
          <div className="nav__logo">
            <p>DONNA STROUPE</p>
          </div>
          <div className="nav__text">
            <p>MAY 2023</p>
          </div>
        </nav>
      </header>

      <section className="hero__container">
        <h1>PORTFOLIO</h1>
        <h2>Photography</h2>
        <div className="hero__img">
          <img src={img1} alt="hero images" loading="lazy" />
          <img src={img2} alt="hero images" loading="lazy" />
          <img src={img3} alt="hero images" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
