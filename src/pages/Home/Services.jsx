import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      id: 1,
      title: "Child Education",
      icon: "icon-education",
      bg: "/assets/images/difference/bg-one.png",
      delay: 0,
    },
    {
      id: 2,
      title: "Healthy Food",
      icon: "icon-food",
      bg: "/assets/images/difference/bg-two.png",
      delay: 100,
    },
    {
      id: 3,
      title: "Medical Care",
      icon: "icon-health",
      bg: "/assets/images/difference/bg-three.png",
      delay: 200,
    },
    {
      id: 4,
      title: "Child Education",
      icon: "icon-education",
      bg: "/assets/images/difference/bg-one.png",
      delay: 300,
    },
    {
      id: 5,
      title: "Healthy Food",
      icon: "icon-food",
      bg: "/assets/images/difference/bg-two.png",
      delay: 400,
    },
    {
      id: 6,
      title: "Medical Care",
      icon: "icon-health",
      bg: "/assets/images/difference/bg-three.png",
      delay: 500,
    },
  ];

  return (
    <section className="difference" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div
              className="section__header text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="sub-title">
                <i className="icon-donation"></i>Start donating poor people
              </span>
              <h2 className="title-animation">Charity With Difference</h2>
              <p>
                Join our monthly giving program to provide consistent support to
                our initiatives. Regular contributions, no matter the size, help
                us plan and sustain long-term projects.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 mb-5"
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              data-aos-duration="1000"
            >
              <div
                className={`difference__single difference__single-${
                  index % 3 === 0
                    ? "first"
                    : index % 3 === 1
                    ? "second"
                    : "third"
                }`}
                style={{
                  backgroundImage: `url(${service.bg})`,
                  //   backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="difference__single-thumb">
                  <i className={service.icon}></i>
                </div>
                <div className="difference__single-content">
                  <h5>
                    <Link to="/cause-details">{service.title}</Link>
                  </h5>
                  <p>
                    Set up a secure and user-friendly online donation platform
                    that accepts multiple
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Shape */}
      <div
        className="shape-hand"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img src="/assets/images/difference/shape-hand.png" alt="Imagee" />
      </div>
    </section>
  );
};

export default Services;
