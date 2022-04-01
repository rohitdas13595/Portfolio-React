import React from "react";

import "./Testimonials.css";

import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    avatar: AV1,
    name: "Vivek Kumar",
    review:
      "Developed my e-commerce site with awesome design. Services are cheap and products are state of the art. Looking forward to work with him for future projects.",
  },
  {
    avatar: AV2,
    name: "Neil Paul",
    review:
      " Worked in my CRM company and did his tasks very efficiently. Has good skills to solve logical and design problems.",
  },
  {
    avatar: AV3,
    name: "Rohan Kapoor",
    review:
      "I was fortunate to hire him. His skills are tested and his behavious is awesome. Very puntual in his deadlines.",
  },
  {
    avatar: AV4,
    name: "Shreyan Kashyap",
    review:
      "Built my responsive portfolio within 2 days. He is very friendly to customers and understands their requirements nicely.",
  },
];

function Testimonials() {
  SwiperCore.use([Autoplay]);
  return (
    <section id="testimonials">
      <h5>Review from clients.</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 ,disableOnInteraction: false}}
        className="container testimonials__container"
      >
        {testimonialData.map((i) => {
          return (
            <SwiperSlide key={i.avatar} className="testimonial">
              <div className="client__avatar">
                <img src={i.avatar} alt="" />
              </div>
              <h5 className="client__name">{i.name}</h5>
              <small className="client__review">{i.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
