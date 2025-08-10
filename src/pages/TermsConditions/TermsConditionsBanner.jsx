/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const TermsConditionsBanner = () => {
  return (
    <section className="common-banner">
      <div className="container">
        <div className="row">
          <div className="common-banner__content text-center">
            <span className="sub-title">
              <i className="icon-donation"></i>Start donating poor people
            </span>
            <h2 className="title-animation">Terms & Conditions</h2>
          </div>
        </div>
      </div>
      <div className="banner-bg">
        <img src="assets/images/banner/banner-bg.png" alt="Image" />
      </div>
      <div className="shape">
        <img src="assets/images/shape.png" alt="Image" />
      </div>
      <div className="sprade" data-aos="zoom-in" data-aos-duration="1000">
        <img
          src="assets/images/sprade-base.png"
          alt="Image"
          className="base-img"
        />
      </div>
    </section>
  );
};

export default TermsConditionsBanner;
