import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import CategoryButton from './CategoryButton';

const CategoryButtonSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: '.category_slide_left_btn',
        nextEl: '.category_slide_right_btn',
      }}
      modules={[Pagination, Navigation]}
      className="category_button_swiper"
      slidesPerView={6} // 동시에 보여줄 슬라이드 갯수
      slidesPerGroup={6} // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    //   spaceBetween={5} // 아이템의 크기에 맞춰 간격 자동 조절
      loopFillGroupWithBlank={true} // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    >
      <SwiperSlide>
        <CategoryButton keyword="연봉이 최고의 복지 💰" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="재택근무 🏠" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="퇴사율 10% 이하 📍" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="급성장 중 📈" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="병역특례 🧑" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="50인 이하 🔽" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="50인 이상 🔼" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="업력 5년 이상 🏢" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="유연근무 🕰" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="자유로운 휴가 🌴" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="일한만큼 받는 보상 💵" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="수평적인 문화 🙌" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="요즘 뜨는 산업 😮" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryButton keyword="식사·간식 제공 ☕️" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CategoryButtonSlider;
