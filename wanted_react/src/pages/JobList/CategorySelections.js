import React from "react";
import { ReactComponent as DropDown_ic } from "../../assets/svg/ic_dropdown.svg";

const CategorySelections = () => {
  return (
    <div className="middle_drop">
      <div className="left">
        <div className="region_btn middle_drop_btn">
          <span>지역</span>
          <span style={{ color: "#36f", fontWeight: "500" }}>한국</span>
        </div>
        <div className="career_btn middle_drop_btn">
          <span>경력</span>
          <span style={{ color: "#36f", fontWeight: "500" }}>전체</span>
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
  );
};

export default CategorySelections;
