import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from 'swiper';
import { Pagination, Navigation } from 'swiper';
import EventContent from './EventContent';

const EventSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      // centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: '.event_left_btn',
        nextEl: '.event_right_btn',
      }}
      // modules={[Autoplay, Pagination, Navigation]}
      modules={[Pagination, Navigation]}
      className="event_swiper"
      slidesPerView={2} // 동시에 보여줄 슬라이드 갯수
      slidesPerGroup={2} // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
      loopFillGroupWithBlank={true} // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    >
      <SwiperSlide>
        <EventContent
          imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2806%2F8949a561.jpg&w=1200&q=100"
          tag="아티클"
          title="디자인 소스 제대로 사용하는 다섯 가지 팁"
          date="2023.04.14 (금)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <EventContent
          imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2804%2F283aa14e.jpg&w=1200&q=100"
          tag="아티클"
          title="폴인 | 와디즈 | 아웃스탠딩 | 롱블랙 | 29CM"
          date="2023.04.30 (일)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <EventContent
          imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2740%2F8d7447f4.jpg&w=1200&q=100"
          tag="교육"
          title="스마트 노무관리 전문가 양성과정 2기"
          date="2023.04.14 (금)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <EventContent
          imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2811%2Fc45037a1.jpg&w=1200&q=100"
          tag="아티클"
          title="디자인 소스 제대로 사용하는 다섯 가지 팁"
          date="2023.04.14 (금)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <EventContent
          imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2806%2F8949a561.jpg&w=1200&q=100"
          tag="아티클"
          title="디자인 소스 제대로 사용하는 다섯 가지 팁"
          date="2023.04.14 (금)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <EventContent
          imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2804%2F283aa14e.jpg&w=1200&q=100"
          tag="아티클"
          title="폴인 | 와디즈 | 아웃스탠딩 | 롱블랙 | 29CM"
          date="2023.04.30 (일)"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default EventSlider;
