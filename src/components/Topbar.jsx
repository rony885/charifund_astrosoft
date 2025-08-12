import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar topbar--secondary d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list">
                      <li>
                        <Link to="mailto:support@example.com">
                          <i className="fa-regular fa-envelope"></i>
                          support@example.com
                        </Link>
                      </li>
                      <li>
                        <Link to="tel:2305-587-3407">
                          <i className="fa-solid fa-phone"></i>+2(305) 587-3407
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 d-none d-xxl-block">
                  <div className="topbar__extra text-center">
                    <p>
                      <i className="icon-heart-hand"></i> Are you ready to help
                      them? Let's become Link volunteer!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__items justify-content-end">
                    <div className="select-currency">
                      <select
                        name="currency"
                        className="currency-select select"
                      >
                        <option value="usd">USD</option>
                        <option value="gbp">GBP</option>
                        <option value="aud">AUD</option>
                        <option value="euro">Euro</option>
                      </select>
                    </div>
                    <div className="select-country">
                      <select name="country" className="country-select select">
                        <option data-flag="fi-gb-eng">English</option>
                        <option data-flag="fi-us">Spanish</option>
                        <option data-flag="fi-cn">Chinese</option>
                        <option data-flag="fi-it">Italian</option>
                      </select>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
