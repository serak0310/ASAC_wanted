import React from 'react';
import { ReactComponent as ArrowDown_ic } from '../../assets/svg/ic_arrow_down.svg';
import { ReactComponent as DropDown_ic } from '../../assets/svg/ic_dropdown.svg';
import { ReactComponent as ArrowRight_ic } from '../../assets/svg/ic_arrow_right.svg';
import { ReactComponent as ArrowLeft_ic } from '../../assets/svg/ic_arrow_left.svg';
import CategoryButtonSlider from './CategoryButtonSlider';

const JobListCategory = () => {
  return (
    <div className="custom_section">
      <div className="top_drop">
        <div className="mainCategory_btn">
          <span>개발</span>
          <div>
            <ArrowDown_ic className="category_btn_svg" />
          </div>
        </div>
        <span className="divider">|</span>
        <div className="middleCategory_btn">
          <span>개발 전체</span>
          <div>
            <ArrowDown_ic className="category_btn_svg" />
          </div>
        </div>
      </div>
      <div className="middle_drop">
        <div className="left">
          <div className="region_btn middle_drop_btn">
            <span>지역</span>
            <span style={{ color: '#36f', fontWeight: '500' }}>한국</span>
          </div>
          <div className="career_btn middle_drop_btn">
            <span>경력</span>
            <span style={{ color: '#36f', fontWeight: '500' }}>전체</span>
            <DropDown_ic />
          </div>
          <div className="skill_btn middle_drop_btn">
            <span>기술스택</span>
            <DropDown_ic />
          </div>
        </div>
        <div className="right">
          <div className="sort_btn middle_drop_btn">
            <span>응답률순</span>
            <DropDown_ic />
          </div>
        </div>
      </div>
      <hr className="divider_container" />
      <div className="bottom_tag">
        <div className="category_slide_left_btn btn">
          <ArrowLeft_ic />
        </div>
        <div className="btn_slide">
          <CategoryButtonSlider/>
        </div>
        <div className="category_slide_right_btn btn">
          <ArrowRight_ic />
        </div>
      </div>
    </div>
  );
};
export default JobListCategory;
