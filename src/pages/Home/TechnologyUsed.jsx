import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "assets/images/cause/five.png",
  "assets/images/cause/six.png",
  "assets/images/cause/seven.png",
  "assets/images/cause/five.png",
  "assets/images/cause/six.png",
  "assets/images/cause/seven.png",
];

const contents = [
  {
    title: "old people & Child trouble",
    text: "Child & old care",
  },
  {
    title: "old people & Child trouble",
    text: "Child & old care",
  },
  {
    title: "old people & Child trouble",
    text: "Child & old care",
  },
  {
    title: "old people & Child trouble",
    text: "Child & old care",
  },
  {
    title: "old people & Child trouble",
    text: "Child & old care",
  },
  {
    title: "old people & Child trouble",
    text: "Child & old care",
  },
];

const TechnologyUsed = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && controlledSwiper && controlledSwiper.controller) {
      controlledSwiper.controller.control = swiperRef.current;
      swiperRef.current.controller.control = controlledSwiper;
    }
  }, [controlledSwiper]);

  return (
    <section className="cause-two">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* IMAGE SLIDER + NAVIGATION - FIRST SIBLING DIV */}
            <div className="cause-two__inner">
              <div className="slider-navigation">
                <button
                  type="button"
                  aria-label="prev slide"
                  title="prev slide"
                  className="prev-cause-two slider-btn"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  type="button"
                  aria-label="next slide"
                  title="next slide"
                  className="next-cause-two slider-btn slider-btn-next"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>

              <Swiper
                modules={[Navigation, Autoplay, Controller]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                  769: { slidesPerView: 3 },
                  426: { slidesPerView: 2 },
                  0: { slidesPerView: 1 },
                }}
                autoplay={{
                  delay:3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true, // Optional: pause on hover
                }}
                className="cause-two__slider swiper"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="cause-two__slider-single">
                      <div className="cause-thumb">
                        <img src={src} alt={`Imagee ${index + 1}`} />
                        {/* <a href="cause-details.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* CONTENT SLIDER - SECOND SIBLING DIV */}
            <div className="cause-two__content-slider swiper">
              <Swiper
                modules={[Controller]}
                slidesPerView={1}
                loop={true}
                onSwiper={setControlledSwiper}
                controller={{ control: swiperRef.current }}
              >
                {contents.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="cause-content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyUsed;
