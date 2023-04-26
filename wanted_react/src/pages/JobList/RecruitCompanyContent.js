import React from 'react';
import { ReactComponent as Bookmark_ic } from '../../assets/svg/ic_bookmark.svg';

const RecruitCompanyContent = ({
  imgSrc,
  recruitTitle,
  companyName,
  responseRate,
  region,
  pay,
}) => {
  return (
    <li className="recruitment_content">
        <div className="content_header">
          <img src={imgSrc} alt="" className="recruitment_image" />
          <button className="recruitment_bookmark"><Bookmark_ic /></button>
        </div>
        <div className="content_body">
          <div className="recruitment_title">{recruitTitle}</div>
          <div className="recruitment_companyname">{companyName}</div>
          <div className="recruitment_response_rate">{responseRate}</div>
          <div className="recruitment_region">{region}</div>
          <div className="recruitment_pay">{pay}</div>
        </div>
    </li>
  );
};

export default RecruitCompanyContent;
