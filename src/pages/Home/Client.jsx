import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/assets/images/sponsor/one.png",
  "/assets/images/sponsor/two.png",
  "/assets/images/sponsor/three.png",
  "/assets/images/sponsor/four.png",
  "/assets/images/sponsor/five.png",
  "/assets/images/sponsor/one.png",
  "/assets/images/sponsor/two.png",
  "/assets/images/sponsor/three.png",
  "/assets/images/sponsor/four.png",
  "/assets/images/sponsor/five.png",
];

const Client = () => {
  return (
    <div className="partner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner__slider swiper">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true, // Optional: pause on hover
                }}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="partner__slider-single">
                      <img src={src} alt={`Sponsor ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
