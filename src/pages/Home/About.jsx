/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const About = () => {
  return (
    <section className="help">
      <div className="container">
        <div className="row align-items-center gutter-40">
          <div className="col-12 col-lg-5 col-xxl-6 d-none d-lg-block">
            <div className="help__thumb">
              <div className="help__thumb-inner">
                <div className="thumb-top thumb">
                  <img src="assets/images/help/thumb-top.png" alt="Image" />
                </div>
                <div
                  className="thumb-lg thumb"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img src="assets/images/help/thumb-lg.png" alt="Image" />
                  <div className="video-btn-wrapper">
                    <a
                      href="https://www.youtube.com/watch?v=RvreULjnzFo"
                      target="_blank"
                      rel="noreferrer"
                      title="video Player"
                      className="open-video-popup"
                    >
                      <i className="icon-play"></i>
                    </a>
                  </div>
                </div>
                <div className="thumb thumb-bottom">
                  <img src="assets/images/help/thumb-bottom.png" alt="Image" />
                </div>
                <div className="line">
                  <img src="assets/images/help/line.png" alt="Image" />
                </div>
                <div className="grid-line">
                  <img
                    src="assets/images/help/grid.png"
                    alt="Image"
                    className="base-img"
                  />
                </div>
                <div className="vertical-text">
                  <h5>
                    We Give <span>Donations</span> to Poor People
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="help__content">
              <span className="sub-title">
                <i className="icon-donation"></i>Start donating poor people
              </span>
              <h2 className="title-animation">
                Helping each other can make <span>world</span> better
              </h2>
              <p>
                Volunteering offers opportunities to develop new skills and gain
                valuable experience. This can include leadership, communication,
                project management, and teamwork skills.
              </p>
              <div className="help__content-icon-group">
                <div className="help__content-icon">
                  <div className="thumb">
                    <i className="icon-make-donation"></i>
                  </div>
                  <div className="content">
                    <h6>Start helping them</h6>
                    <p>
                      Raising awareness about the charity's mission and cause.
                    </p>
                  </div>
                </div>
                <div className="help__content-icon">
                  <div className="thumb">
                    <i className="icon-support-heart"></i>
                  </div>
                  <div className="content">
                    <h6>Make Donations</h6>
                    <p>
                      Raising awareness about the charity's mission and cause.
                    </p>
                  </div>
                </div>
              </div>
              <div className="help__content-list">
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Helped fund
                    3,265 Project powerful corporate poor.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> We give child a
                    gift of a education
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> We help
                    companies develop powerful corporate social Responsibility,
                  </li>
                </ul>
              </div>
              <div className="help__content-cta cta">
                <a
                  href="about-us.html"
                  aria-label="more about us"
                  title="about us"
                  className="btn--primary"
                >
                  More About Us
                </a>
                <div className="contact-btn">
                  <div className="contact-icon">
                    <i className="icon-phone"></i>
                  </div>
                  <div className="contact-content">
                    <p>Phone</p>
                    <a href="tel:01-793-7938">+236 (456) 896 22</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hand">
        <img src="assets/images/help/hand.png" alt="Image" />
      </div>
      <div className="parasuit">
        <img src="assets/images/parasuit.png" alt="Image" />
      </div>
      <div className="spade">
        <img src="assets/images/help/spade.png" alt="Image" />
      </div>
    </section>
  );
};

export default About;
