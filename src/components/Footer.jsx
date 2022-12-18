import React from "react";
import img28 from "../assests/images/img-28.jpg";
import img29 from "../assests/images/img-29.jpg";
import img30 from "../assests/images/img-30.jpg";
import img31 from "../assests/images/img-31.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="box__one">
          <img loading="lazy" src={img28} alt="footer image" />
          <img loading="lazy" src={img29} alt="footer image" />
        </div>

        <div className="box__two">
          <h1>
            HOPE TO WORK
            <br />
            WITH YOU
          </h1>
          <h2>Soon</h2>
        </div>
        <div className="box__three">
          <div>
            <img loading="lazy" src={img30} alt="footer image" />
          </div>

          <div>
            <img loading="lazy" src={img31} alt="footer image" />
          </div>

          <div className="text__box">
            <address>
              +01 1234 5678
              <br />
              hello@youremailaddress.com
              <br />
              www.yoursitename.com
              <br />
              @yoursitename
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
