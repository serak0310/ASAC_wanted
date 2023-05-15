import React from "react";
import dataForRecruitment from "../../datasource/JobList/recruitmentCompany.json";
import { useSelector } from "react-redux";
import RecruitCompanyContent from "../JobList/RecruitCompanyContent";
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const bList = useSelector((state) => state);

  const navigate = useNavigate();
  function recruitmentClick(id) {
    navigate(`/joblist/${id}`, { state: { key: id } });
  }

  return (
    <div className="bookmark-page">
      <div className="bookmark-page__header">
        <h1 className="bookmark-page__title">북마크</h1>
      </div>
      <div className="bookmark-page__body">
        <ul className="recruitment_list">
          {dataForRecruitment.companies.map((company) => (
            <RecruitCompanyContent
              key={company.id}
              imgSrc={company.imgSrc}
              recruitTitle={company.recruitTitle}
              companyName={company.companyName}
              responseRate={company.responseRate}
              region={company.region}
              pay={company.pay}
              onClick={() => recruitmentClick(company.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookmarks;
