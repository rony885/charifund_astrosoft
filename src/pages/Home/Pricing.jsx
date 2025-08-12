import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pricing = () => {
  return (
    <Wrapeer>
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
                  <i className="icon-donation"></i>## Pricing
                </span>
                <h2 className="title-animation text-capitalize">
                  Domain<span> & Hosting Plans</span>
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
                  <div className="blog__single-inner">
                    <div className="blog__single-content text-center">
                      <h4 className="fs-1 mb-4">Alpha Plan</h4>
                      <h2 className="price mb-2">
                        $19.99 <small>/ year</small>
                      </h2>
                      <p className="fs-5 mb-4">
                        Perfect for personal websites or portfolios.
                      </p>
                      <ul className="features list-unstyled">
                        <li className="fs-5 mb-2">1 Domain (.com)</li>
                        <li className="fs-5 mb-2">1 GB SSD Hosting</li>
                        <li className="fs-5 mb-2">1 Website</li>
                        <li className="fs-5 mb-2">5 Sub Domains</li>
                        <li className="fs-5 mb-2">5 Email Accounts</li>
                        <li className="fs-5 mb-2">10 GB Bandwidth</li>
                        <li className="fs-5 mb-2">Free SSL Certificate</li>
                        <li className="fs-5 mb-2">cPanel Access</li>
                        <li className="fs-5 mb-2">99.9% Uptime Guarantee</li>
                        <li className="fs-5 mb-2">24/7 Email Support</li>
                      </ul>
                    </div>
                    <div className="blog__single-cta text-center">
                      <Link
                        to="#"
                        aria-label="purchase plan"
                        title="purchase plan"
                      >
                        Get Started
                        <i className="fa-solid fa-circle-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-4">
              <div
                className="blog__single-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="blog__single van-tilt">
                  <div className="blog__single-inner">
                    <div className="blog__single-content text-center">
                      <h4 className="fs-1 mb-4">Beta Plan</h4>
                      <h2 className="price mb-2">
                        $39.99 <small>/ year</small>
                      </h2>
                      <p className="fs-5 mb-4">
                        Ideal for small businesses and growing startups.
                      </p>
                      <ul className="features list-unstyled">
                        <li className="fs-5 mb-2">1 Domain (.com / .net)</li>
                        <li className="fs-5 mb-2">5 GB SSD Hosting</li>
                        <li className="fs-5 mb-2">3 Websites</li>
                        <li className="fs-5 mb-2">10 Sub Domains</li>
                        <li className="fs-5 mb-2">20 Email Accounts</li>
                        <li className="fs-5 mb-2">50 GB Bandwidth</li>
                        <li className="fs-5 mb-2">Free SSL Certificate</li>
                        <li className="fs-5 mb-2">cPanel + FTP Access</li>
                        <li className="fs-5 mb-2">99.9% Uptime Guarantee</li>
                        <li className="fs-5 mb-2">24/7 Technical Support</li>
                      </ul>
                    </div>
                    <div className="blog__single-cta text-center">
                      <Link
                        to="#"
                        aria-label="purchase plan"
                        title="purchase plan"
                      >
                        Get Started
                        <i className="fa-solid fa-circle-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-4">
              <div
                className="blog__single-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="blog__single van-tilt">
                  <div className="blog__single-inner">
                    <div className="blog__single-content text-center">
                      <h4 className="fs-1 mb-4">Gamma Plan</h4>
                      <h2 className="price mb-2">
                        $69.99 <small>/ year</small>
                      </h2>
                      <p className="fs-5 mb-4">
                        Best for eCommerce or high-traffic websites.
                      </p>
                      <ul className="features list-unstyled">
                        <li className="fs-5 mb-2">
                          1 Premium Domain (.com / .net / .org)
                        </li>
                        <li className="fs-5 mb-2">10 GB SSD Hosting</li>
                        <li className="fs-5 mb-2">10 Websites</li>
                        <li className="fs-5 mb-2">Unlimited Sub Domains</li>
                        <li className="fs-5 mb-2">Unlimited Email Accounts</li>
                        <li className="fs-5 mb-2">Unlimited Bandwidth</li>
                        <li className="fs-5 mb-2">
                          Free SSL Certificate + Daily Backup
                        </li>
                        <li className="fs-5 mb-2">cPanel + SSH Access</li>
                        <li className="fs-5 mb-2">99.9% Uptime Guarantee</li>
                        <li className="fs-5 mb-2">24/7 Priority Support</li>
                      </ul>
                    </div>
                    <div className="blog__single-cta text-center">
                      <Link
                        to="#"
                        aria-label="purchase plan"
                        title="purchase plan"
                      >
                        Get Started
                        <i className="fa-solid fa-circle-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
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
          <img src="/assets/images/blog/blog-bg.png" alt="Imagee" />
        </div>
        <div className="spade">
          <img
            src="/assets/images/blog/spade-base.png"
            alt="Imagee"
            className="base-img"
          />
        </div>
      </section>
    </Wrapeer>
  );
};

const Wrapeer = styled.section`
  .blog__single {
    transition: all 0.3s ease;
  }

  .blog__single:hover {
    background-color: #222; /* Optional: Dark background on hover */
    background-color: #046a58;
    color: #fff;
  }

  .blog__single:hover h4,
  .blog__single:hover h2,
  .blog__single:hover p,
  .blog__single:hover li,
  .blog__single:hover a {
    color: #fff !important;
  }
  .text-capitalize {
    text-transform: capitalize !important;
  }
`;

export default Pricing;
