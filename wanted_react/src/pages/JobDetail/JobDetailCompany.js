import React from "react";
import dummyForRecruitment from "../../datasource/JobList/recruitmentCompany.json";

const JobDetailCompany = ({ pageId, page }) => {
  const style = page === "search" ? { width: "477px", margin: "0" } : null;

  const company = dummyForRecruitment.companies.filter(
    (company) => company.id === pageId || company.companyName === pageId
  )[0];
  return (
    <div className="companyinfo_content">
      <button className="companyDetail_btn" type="button">
        <div>
          <img src={company.companyImage} alt="로고이미지" />
        </div>
        <div>
          <h5>{company.companyName}</h5>
          <h6>{company.workCategory}</h6>
        </div>
      </button>
      <button className="follow_btn" type="button">
        팔로우
      </button>
    </div>
  );
};

export default JobDetailCompany;
