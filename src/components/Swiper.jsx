import { slideOne, slideTwo } from "../assets/data";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination, Scrollbar]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {[slideOne, slideTwo, slideOne, slideTwo].map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto rounded-xl object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
