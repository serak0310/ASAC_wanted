import React from 'react';
import { ReactComponent as ArrowDown_ic } from '../../assets/svg/ic_arrow_down.svg';
import { ReactComponent as DropDown_ic } from '../../assets/svg/ic_dropdown.svg';
import { ReactComponent as ArrowRight_ic } from '../../assets/svg/ic_arrow_right.svg';
import { ReactComponent as ArrowLeft_ic } from '../../assets/svg/ic_arrow_left.svg';
import CategoryButtonSlider from './CategoryButtonSlider';
import CategorySelections from './CategorySelections';

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
      <CategorySelections/>
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
