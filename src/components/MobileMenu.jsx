import React from "react";
import { useLocation, Link } from "react-router-dom";

const MobileMenu = ({ menuOpen, closeMenu }) => {
  const location = useLocation();

  // Update isActive to support subroutes
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div
        className={`mobile-menu d-block d-xl-none ${
          menuOpen ? "show-menu" : ""
        } 
      `}
      >
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <Link to="/" aria-label="home page" title="logo">
                <img src="/assets/images/logo.png" alt="Imagee" />
              </Link>
            </div>
            <button
              onClick={closeMenu}
              aria-label="close mobile menu"
              className="close-mobile-menu"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="mobile-menu__list">
            <ul className="navbar__list">
              <li
                className={`navbar__item ${isActive("/") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <Link to="/">Home</Link>
              </li>

              <li
                className={`navbar__item ${isActive("/about") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <Link to="/about-us">About Us</Link>
              </li>

              <li
                className={`navbar__item ${
                  isActive("/services") ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                <Link to="/">Services</Link>
              </li>

              <li
                className={`navbar__item ${
                  isActive("/global-associate") ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                <Link to="/global-associate">Global Associate</Link>
              </li>

              <li
                className={`navbar__item ${
                  isActive("/emigrant-division") ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                <Link to="/">Pricing</Link>
              </li>

              <li
                className={`navbar__item ${
                  isActive("/contact") ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div
            className="mobile-menu__cta d-block d-md-none"
            onClick={closeMenu}
          >
            <Link
              to="/sign-up"
              aria-label="create account"
              title="create account"
              className="btn--primary"
            >
              Donate Now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
              title="facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              to="https://instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
              title="instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="https://x.com/"
              target="_blank"
              aria-label="share us on twitter"
              title="Twitter"
            >
              <i className="fab fa-x-twitter"></i>
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
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          menuOpen ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>
    </>
  );
};

export default MobileMenu;
