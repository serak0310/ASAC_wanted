import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from 'swiper';
import JobDetailImage from './JobDetailImage';

const JobDetailSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: '.jobdetail_prev_btn',
        nextEl: '.jobdetail_next_btn',
      }}
      scrollbar={{
        draggable: true
      }}
      modules={[Navigation, Scrollbar]}
      className="swiper-container jobdetail_swiper"
    >
      <SwiperSlide>
        <JobDetailImage imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&w=1000&q=75" />
      </SwiperSlide>
      <SwiperSlide>
        <JobDetailImage imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75" />
      </SwiperSlide>
      <SwiperSlide>
        <JobDetailImage imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&w=1000&q=75" />
      </SwiperSlide>
      <SwiperSlide>
        <JobDetailImage imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75" />
      </SwiperSlide>
    </Swiper>
  );
};

export default JobDetailSlider;
