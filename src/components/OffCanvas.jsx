import React from "react";
import { Link } from "react-router-dom";

const OffCanvas = ({ menuOpenn, closeMenuu }) => {
  return (
    <>
      <div
        className={`off-canvas d-none d-xl-block ${
          menuOpenn ? "off-canvas-active" : ""
        } 
          `}
      >
        <div className="off-canvas__inner">
          <div className="off-canvas__head">
            <Link to="index-2.html">
              <img src="assets/images/logo.png" alt="Logo" />
            </Link>
            <button
              onClick={closeMenuu}
              aria-label="close off canvas"
              className="off-canvas-close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="offcanvas__search">
            <form action="#">
              <input
                type="text"
                placeholder="What are you searching for?"
                required
              />
              <button type="submit">
                <i className="icon-search"></i>
              </button>
            </form>
          </div>
          <div className="off-canvas__contact">
            <h5>Contact Info</h5>
            <div className="single">
              <span>
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <Link to="tel:253-556-7777">(+1) 253 556-7777</Link>
            </div>
            <div className="single">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <Link to="mailto:example@support.com">example@support.com</Link>
            </div>
            <div className="single">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <Link
                target="_blank"
                to="https://www.google.com/maps/place/Narbethong+QLD+4725,+Australia/@-23.8173641,145.3223283,11z/data=!3m1!4b1!4m15!1m8!3m7!1s0x2b2bfd076787c5df:0x538267a1955b1352!2sAustralia!3b1!8m2!3d-25.274398!4d133.775136!16zL20vMGNoZ2h5!3m5!1s0x6bcacfb51d7e5257:0x400eef17f209750!8m2!3d-23.8656897!4d145.5354411!16s%2Fg%2F1wd3w6zw"
              >
                Narbethong Queensland 4725 Australia
              </Link>
            </div>
          </div>
          <div className="social">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
              title="facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              to="https://vimeo.com/"
              target="_blank"
              aria-label="share us on vimeo"
              title="vimeo"
            >
              <i className="fa-brands fa-vimeo-v"></i>
            </Link>
            <Link
              to="https://x.com/"
              target="_blank"
              aria-label="share us on twitter"
              title="twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              aria-label="share us on linkedin"
              title="linkedin"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`off-canvas-backdrop ${
          menuOpenn ? "off-canvas-backdrop-active" : ""
        } 
          `}
      ></div>
    </>
  );
};

export default OffCanvas;
