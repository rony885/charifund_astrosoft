/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleMenu, menuOpen, toggleMenuu, menuOpenn }) => {
  return (
    <header className="header header-secondary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-header__menu-box">
              <nav className="navbar p-0">
                <div className="navbar-logo">
                  <Link to="/">
                    <img src="/assets/images/logo.png" alt="Image" />
                  </Link>
                </div>
                <div className="navbar__menu-wrapper">
                  <div className="navbar__menu d-none d-xl-block">
                    <ul className="navbar__list">
                      <li className="navbar__item  nav-fade">
                        <Link to="/">Home</Link>
                      </li>

                      <li className="navbar__item nav-fade">
                        <Link to="/">About Us</Link>
                      </li>

                      <li className="navbar__item  nav-fade">
                        <Link to="/">Services</Link>
                      </li>

                      <li className="navbar__item  nav-fade">
                        <Link to="/">Pricing</Link>
                      </li>

                      <li className="navbar__item nav-fade">
                        <Link to="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-btn">
                    <div className="contact-icon">
                      <i className="icon-support"></i>
                    </div>
                    <div className="contact-content">
                      <p>Call Us Now</p>
                      <Link to="tel:01-793-7938">(+01)-793-7938 </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar__options">
                  <div className="navbar__mobile-options">
                    <Link
                      to="#"
                      className="btn--primary d-none d-md-flex"
                      onClick={toggleMenuu}
                    >
                      Donate Now <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <button
                    // className="open-offcanvas-nav d-flex d-xl-none"
                    className={`open-offcanvas-nav d-flex d-xl-none ${
                      menuOpen ? "open-offcanvas-nav-active" : ""
                    }`}
                    aria-label="toggle mobile menu"
                    title="open offcanvas menu"
                    onClick={toggleMenu}
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
