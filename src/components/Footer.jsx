import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-two">
      <div className="container">
        <div className="row align-items-center gutter-30">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="footer-two__newsletter-content">
              <h3 className="title-animation">Subscribe to Our Newsletter</h3>
              <p>Regular inspections and feedback mechanisms</p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-5 offset-xxl-1">
            <div className="footer-two__newsletter-form">
              <form action="#" method="post">
                <input
                  type="email"
                  required
                  name="subscribe-email"
                  id="subscribeEmail"
                  placeholder="Enter Email"
                />
                <button
                  type="submit"
                  aria-label="subscribe to our newsletter"
                  title="subscribe to our newsletter"
                  className="btn--primary"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr className="divider" />
          </div>
        </div>
        <div className="row gutter-60">
          <div className="col-12 col-md-6 col-xl-3">
            <div
              className="footer-two__widget"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="footer-two__widget-logo">
                <Link to="index-2">
                  <img src="/assets/images/logo-light.png" alt="Imagee" />
                </Link>
              </div>
              <div className="footer-two__widget-content">
                <p>
                  Our secure online donation platform allows you to make
                  contributions quickly and safely. Choose from various.
                </p>
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
          <div className="col-12 col-md-6 col-xl-2 offset-xl-1">
            <div
              className="footer-two__widget"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="footer-two__widget-intro">
                <h5>Quick Links</h5>
                <div className="line">
                  <span className="large-line"></span>
                  <span className="small-line"></span>
                  <span className="small-line"></span>
                </div>
              </div>
              <div className="footer-two__widget-content">
                <ul>
                  <li>
                    <Link to="/about-us">
                      <i className="fa-solid fa-arrow-right"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-list">
                      <i className="fa-solid fa-arrow-right"></i>Our News
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-causes">
                      <i className="fa-solid fa-arrow-right"></i>Our Campaign
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <i className="fa-solid fa-arrow-right"></i>FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <i className="fa-solid fa-arrow-right"></i>Get A Quote
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div
              className="footer-two__widget footer-two__widget--alternate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="footer-two__widget-intro">
                <h5>Our Services</h5>
                <div className="line">
                  <span className="large-line"></span>
                  <span className="small-line"></span>
                  <span className="small-line"></span>
                </div>
              </div>
              <div className="footer-two__widget-content">
                <ul>
                  <li>
                    <Link to="/our-causes">
                      <i className="fa-solid fa-arrow-right"></i>Our Causes
                    </Link>
                  </li>
                  <li>
                    <Link to="/events">
                      <i className="fa-solid fa-arrow-right"></i>Education
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-causes">
                      <i className="fa-solid fa-arrow-right"></i>Our Campaign
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-causes">
                      <i className="fa-solid fa-arrow-right"></i>Food Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-causes">
                      <i className="fa-solid fa-arrow-right"></i>Health Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div
              className="footer-two__widget footer-two__widget--alternate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="footer-two__widget-intro">
                <h5>Get In Touch</h5>
                <div className="line">
                  <span className="large-line"></span>
                  <span className="small-line"></span>
                  <span className="small-line"></span>
                </div>
              </div>
              <div className="footer-two__widget-content footer-two__widget-content--contact">
                <ul>
                  <li>
                    <Link
                      to="https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8"
                      target="_blank"
                    >
                      <i className="fa-solid fa-location-dot"></i>455 West
                      Orchard Street Kings Mountain, NC 280867
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:2305-587-3407">
                      <i className="fa-solid fa-phone"></i>+088 (246) 642-27-10
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:support@example.com">
                      <i className="fa-regular fa-envelope"></i>
                      example@email.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two__copyright">
        <div className="container">
          <div className="row align-items-center gutter-12">
            <div className="col-12 col-lg-6">
              <div className="footer-two__copyright-inner text-center text-lg-start">
                <p>
                  Copyright &copy; <span id="copyrightYear"></span>
                  <Link to="index-2">Charifund</Link>. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer__bottom-left">
                <ul className="footer__bottom-list justify-content-center justify-content-lg-end">
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Cookie Settings</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sprade" data-aos="zoom-in" data-aos-duration="1000">
        <img src="/assets/images/sprade.png" alt="Imagee" className="base-img" />
      </div>
      <div className="sprade-light" data-aos="zoom-in" data-aos-duration="1000">
        <img src="/assets/images/sprade-light.png" alt="Imagee" />
      </div>
    </footer>
  );
};

export default Footer;
