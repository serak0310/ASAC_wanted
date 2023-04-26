import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';
import Banner from './Banner';

// 버튼 기능 미완성
const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      autoplay={{
        delay: 2100,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: '.main_banner_left_btn',
        nextEl: '.main_banner_right_btn',
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="main_banner_swiper"
      loop={true}
      slidesPerView={3} // 동시에 보여줄 슬라이드 갯수,
      // slidesPerGroup={3} // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
      // loopFillGroupWithBlank={true} // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    >
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2011%2F982a3738.jpg&w=1060&q=100" />
      </SwiperSlide>
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1940%2F4a485a58.jpg&w=1060&q=100" />
      </SwiperSlide>
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2014%2Fc4db989b.jpg&w=1060&q=100" />
      </SwiperSlide>
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2002%2F68e95300.jpg&w=1060&q=100" />
      </SwiperSlide>
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&w=1060&q=100" />
      </SwiperSlide>
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2017%2F21093a9f.jpg&w=1060&q=100" />
      </SwiperSlide>
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2019%2F82c49d39.jpg&w=1060&q=100" />
      </SwiperSlide>
      <SwiperSlide>
        <Banner imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1975%2Fdebe424c.jpg&w=1060&q=100" />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
