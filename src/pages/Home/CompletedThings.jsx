import React from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css"; // Import odometer CSS theme
import "aos/dist/aos.css";

const CompletedThings = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__inner">
              <div
                className="counter__single"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="thumb">
                  <i className="icon-support-hand"></i>
                </div>
                <div className="counter__content">
                  <h2>
                    <Odometer value={400} format="d" />
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Team member</h5>
                </div>
              </div>
              <div className="divider"></div>
              <div
                className="counter__single"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="thumb">
                  <i className="icon-review"></i>
                </div>
                <div className="counter__content">
                  <h2>
                    <Odometer value={80} format="d" />K
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Client's review</h5>
                </div>
              </div>
              <div className="divider"></div>
              <div
                className="counter__single"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div className="thumb">
                  <i className="icon-documents"></i>
                </div>
                <div className="counter__content">
                  <h2>
                    <Odometer value={100} format="d" />K
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Completed projects</h5>
                </div>
              </div>
              <div className="divider"></div>
              <div
                className="counter__single"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                <div className="thumb">
                  <i className="icon-award"></i>
                </div>
                <div className="counter__content">
                  <h2>
                    <Odometer value={40} format="d" />K
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Winning award</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poor">
        <img
          src="assets/images/poor-two.png"
          alt="Imagee"
          className="parallax-image"
        />
      </div>
      <div
        className="shape-left"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img
          src="assets/images/cta/shape-left.png"
          alt="Imagee"
          className="base-img"
        />
      </div>
    </section>
  );
};

export default CompletedThings;
