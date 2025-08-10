/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Pricing = () => {
  return (
    <section className="blog" id="pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-xl-7">
            <div
              className="section__header text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="sub-title">
                <i className="icon-donation"></i>Start donating poor people
              </span>
              <h2 className="title-animation">
                Our Latest <span>News</span> & Articles you like
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutter-40">
          <div className="col-12 col-lg-6 col-xl-4">
            <div
              className="blog__single-wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="blog__single van-tilt">
                <div className="blog__single-thumb">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/one.png" alt="Image" />
                  </a>
                  <div className="tag">
                    <a href="blog-list.html">
                      <i className="fa-solid fa-tags"></i>Health
                    </a>
                  </div>
                </div>
                <div className="blog__single-inner">
                  <div className="blog__single-meta">
                    <p>
                      <i className="icon-user"></i>Robert Fox
                    </p>
                    <p>
                      <i className="icon-message"></i>Comments (03)
                    </p>
                  </div>
                  <div className="blog__single-content">
                    <h5>
                      <a href="blog-details.html">
                        IT Service Case Studies Accelerate Business Fly Success
                        Tech
                      </a>
                    </h5>
                  </div>
                  <div className="blog__single-cta">
                    <a
                      href="blog-details.html"
                      aria-label="blog details"
                      title="blog details"
                    >
                      Read More
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <img
                  src="assets/images/blog/spade.png"
                  alt="Image"
                  className="spade-two"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <div
              className="blog__single-wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="blog__single van-tilt">
                <div className="blog__single-thumb">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/two.png" alt="Image" />
                  </a>
                  <div className="tag">
                    <a href="blog-list.html">
                      <i className="fa-solid fa-tags"></i>Education
                    </a>
                  </div>
                </div>
                <div className="blog__single-inner">
                  <div className="blog__single-meta">
                    <p>
                      <i className="icon-user"></i>Robert Fox
                    </p>
                    <p>
                      <i className="icon-message"></i>Comments (08)
                    </p>
                  </div>
                  <div className="blog__single-content">
                    <h5>
                      <a href="blog-details.html">
                        IT Service Case Studies Accelerate Business Fly Success
                        Tech
                      </a>
                    </h5>
                  </div>
                  <div className="blog__single-cta">
                    <a
                      href="blog-details.html"
                      aria-label="blog details"
                      title="blog details"
                    >
                      Read More
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <img
                  src="assets/images/blog/spade.png"
                  alt="Image"
                  className="spade-two"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4">
            <div
              className="blog__single-wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="blog__single van-tilt">
                <div className="blog__single-thumb">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/three.png" alt="Image" />
                  </a>
                  <div className="tag">
                    <a href="blog-list.html">
                      <i className="fa-solid fa-tags"></i>Food
                    </a>
                  </div>
                </div>
                <div className="blog__single-inner">
                  <div className="blog__single-meta">
                    <p>
                      <i className="icon-user"></i>Robert Fox
                    </p>
                    <p>
                      <i className="icon-message"></i>Comments (13)
                    </p>
                  </div>
                  <div className="blog__single-content">
                    <h5>
                      <a href="blog-details.html">
                        IT Service Case Studies Accelerate Business Fly Success
                        Tech
                      </a>
                    </h5>
                  </div>
                  <div className="blog__single-cta">
                    <a
                      href="blog-details.html"
                      aria-label="blog details"
                      title="blog details"
                    >
                      Read More
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <img
                  src="assets/images/blog/spade.png"
                  alt="Image"
                  className="spade-two"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta cta text-center">
              <a
                href="blog-list.html"
                aria-label="our blog"
                title="our blog"
                className="btn--primary"
              >
                View All <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-bg">
        <img src="assets/images/blog/blog-bg.png" alt="Image" />
      </div>
      <div className="spade">
        <img
          src="assets/images/blog/spade-base.png"
          alt="Image"
          className="base-img"
        />
      </div>
    </section>
  );
};

export default Pricing;
