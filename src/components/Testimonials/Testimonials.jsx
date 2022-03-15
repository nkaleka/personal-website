import React from "react";
import "./Testimonials.css";
import AVTAR1 from "../../assets/avatar1.jpg";
import AVTAR2 from "../../assets/avatar2.jpg";
import AVTAR3 from "../../assets/avatar3.jpg";
import AVTAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonial = [
  {
    avatar: AVTAR1,
    name: "name1",
    review: "rvw1",
  },
  {
    avatar: AVTAR2,
    name: "name2",
    review: "rvw2",
  },
  {
    avatar: AVTAR3,
    name: "name3",
    review: "rvw3",
  },
  {
    avatar: AVTAR4,
    name: "name4",
    review: "rvw4 ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
      >
        {testimonial.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
