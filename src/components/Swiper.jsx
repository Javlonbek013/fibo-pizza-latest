import { slideOne, slideTwo } from "../assets/data";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules"; // Autoplay qo'shildi
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]} 
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={slideOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideTwo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideTwo} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default MySwiper;
