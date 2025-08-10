import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const slides = [
  {
    bg: "/assets/images/banner/banner-two-bg.png",
    title: "Giving help To Those peoples Who Need It.",
  },
  {
    bg: "/assets/images/banner/banner-one-bg.png",
    title: "Giving help To Those peoples Who Need It.",
  },
  {
    bg: "/assets/images/banner/banner-two-bg.png",
    title: "Giving help To Those peoples Who Need It.",
  },
  {
    bg: "/assets/images/banner/banner-one-bg.png",
    title: "Giving help To Those peoples Who Need It.",
  },
];

const BannerSection = () => {
  return (
    <section className="banner-two">
      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Optional: pause on hover
        }}
        navigation={{
          nextEl: ".next-banner",
          prevEl: ".prev-banner",
        }}
        className="banner-two__slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-two__slider-single"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
                    <div className="banner-two__slider-content">
                      <span className="sub-title">
                        <i className="icon-donation"></i>Start donating poor
                        people
                      </span>
                      <h1>
                        Giving help <br />
                        To Those <span className="bottom-line">
                          peoples
                        </span>{" "}
                        Who Need It.
                      </h1>
                      <div className="banner__content-cta cta">
                        <a
                          href="our-causes.html"
                          aria-label="about us"
                          title="about us"
                          className="btn--tertiary"
                        >
                          Discover More
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a
                          href="contact-us.html"
                          aria-label="contact us"
                          title="contact us"
                          className="btn--primary"
                        >
                          Get A Quote{" "}
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="slider-navigation d-none d-md-flex">
        <button
          type="button"
          aria-label="prev slide"
          title="prev slide"
          className="prev-banner slider-btn"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          type="button"
          aria-label="next slide"
          title="next slide"
          className="next-banner slider-btn slider-btn-next"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Shapes */}
      <div className="shape">
        <img src="/assets/images/shape.png" alt="Imagee" />
      </div>
      <div
        className="shape-left"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img src="/assets/images/banner/banner-two-shape.png" alt="Imagee" />
      </div>
      <div className="sprade-shape">
        <img
          src="/assets/images/sprade-base.png"
          alt="Imagee"
          className="base-img"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
      </div>
      <div className="unity">
        <img src="/assets/images/unity.png" alt="Imagee" />
      </div>
    </section>
  );
};

export default BannerSection;

// import React from "react";

// const BannerSection = () => {
//   return (
//     <section className="banner-two">
//       <div className="banner-two__slider swiper">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide">
//             <div className="banner-two__slider-single">
//               <div
//                 className="banner-two__slider-bg"
//                 data-background="assets/images/banner/banner-two-bg.png"
//               ></div>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
//                     <div className="banner-two__slider-content">
//                       <span className="sub-title">
//                         <i className="icon-donation"></i>Start donating poor people
//                       </span>
//                       <h1>
//                         Giving help <br />
//                         To Those <span className="bottom-line">peoples</span>
//                         Who Need It.
//                       </h1>
//                       <div className="banner__content-cta cta">
//                         <a
//                           href="our-causes.html"
//                           aria-label="about us"
//                           title="about us"
//                           className="btn--tertiary"
//                         >
//                           Discover More
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                         <a
//                           href="contact-us.html"
//                           aria-label="contact us"
//                           title="contact us"
//                           className="btn--primary"
//                         >
//                           Get A Quote <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="banner-two__slider-single">
//               <div
//                 className="banner-two__slider-bg"
//                 data-background="assets/images/banner/banner-one-bg.png"
//               ></div>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
//                     <div className="banner-two__slider-content">
//                       <span className="sub-title">
//                         <i className="icon-donation"></i>Start donating poor people
//                       </span>
//                       <h1>
//                         Giving help <br />
//                         To Those <span className="bottom-line">peoples</span>
//                         Who Need It.
//                       </h1>
//                       <div className="banner__content-cta cta">
//                         <a
//                           href="our-causes.html"
//                           aria-label="about us"
//                           title="about us"
//                           className="btn--tertiary"
//                         >
//                           Discover More
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                         <a
//                           href="contact-us.html"
//                           aria-label="contact us"
//                           title="contact us"
//                           className="btn--primary"
//                         >
//                           Get A Quote <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="banner-two__slider-single">
//               <div
//                 className="banner-two__slider-bg"
//                 data-background="assets/images/banner/banner-two-bg.png"
//               ></div>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
//                     <div className="banner-two__slider-content">
//                       <span className="sub-title">
//                         <i className="icon-donation"></i>Start donating poor people
//                       </span>
//                       <h1>
//                         Giving help <br />
//                         To Those <span className="bottom-line">peoples</span>
//                         Who Need It.
//                       </h1>
//                       <div className="banner__content-cta cta">
//                         <a
//                           href="our-causes.html"
//                           aria-label="about us"
//                           title="about us"
//                           className="btn--tertiary"
//                         >
//                           Discover More
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                         <a
//                           href="contact-us.html"
//                           aria-label="contact us"
//                           title="contact us"
//                           className="btn--primary"
//                         >
//                           Get A Quote <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="banner-two__slider-single">
//               <div
//                 className="banner-two__slider-bg"
//                 data-background="assets/images/banner/banner-one-bg.png"
//               ></div>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
//                     <div className="banner-two__slider-content">
//                       <span className="sub-title">
//                         <i className="icon-donation"></i>Start donating poor people
//                       </span>
//                       <h1>
//                         Giving help <br />
//                         To Those <span className="bottom-line">peoples</span>
//                         Who Need It.
//                       </h1>
//                       <div className="banner__content-cta cta">
//                         <a
//                           href="our-causes.html"
//                           aria-label="about us"
//                           title="about us"
//                           className="btn--tertiary"
//                         >
//                           Discover More
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                         <a
//                           href="contact-us.html"
//                           aria-label="contact us"
//                           title="contact us"
//                           className="btn--primary"
//                         >
//                           Get A Quote <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="slider-navigation d-none d-md-flex">
//         <button
//           type="button"
//           aria-label="prev slide"
//           title="prev slide"
//           className="prev-banner slider-btn"
//         >
//           <i className="fa-solid fa-arrow-left"></i>
//         </button>
//         <button
//           type="button"
//           aria-label="next slide"
//           title="next slide"
//           className="next-banner slider-btn slider-btn-next"
//         >
//           <i className="fa-solid fa-arrow-right"></i>
//         </button>
//       </div>
//       <div className="shape">
//         <img src="assets/images/shape.png" alt="Image" />
//       </div>
//       <div
//         className="shape-left"
//         data-aos="fade-right"
//         data-aos-duration="1000"
//         data-aos-delay="300"
//       >
//         <img src="assets/images/banner/banner-two-shape.png" alt="Image" />
//       </div>
//       <div className="sprade-shape">
//         <img
//           src="assets/images/sprade-base.png"
//           alt="Image"
//           className="base-img"
//           data-aos="zoom-in"
//           data-aos-duration="1000"
//         />
//       </div>
//       <div className="unity">
//         <img src="assets/images/unity.png" alt="Image" />
//       </div>
//     </section>
//   );
// };

// export default BannerSection;
