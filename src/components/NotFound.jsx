import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div
              className="error__content text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="thumb">
                <img src="/assets/images/error.png" alt="Imagee" />
              </div>
              <h2 className="title-animation">404</h2>
              <h3 className="title-animation">Page Not Found</h3>
              <p>
                It could have been removed, renamed, or temporarily unavailable.
                Try searching for what you're looking for.
              </p>
              <div className="cta">
                <Link
                  to="/"
                  aria-label="back to home"
                  title="back to home"
                  className="btn--primary"
                >
                  Back To Home <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spade">
        <img
          src="/assets/images/blog/spade-base.png"
          alt="Imagee"
          className="base-img"
        />
      </div>
      <div className="spade-green">
        <img src="/assets/images/sprade-green.png" alt="Imagee" />
      </div>
    </section>
  );
};

export default NotFound;
