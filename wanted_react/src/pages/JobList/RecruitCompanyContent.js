import React from "react";
import { ReactComponent as Bookmark_ic } from "../../assets/svg/ic_bookmark.svg";
// 북마크
import { setBookmark, removeBookmark } from "../../modules/Bookmark";
import { useDispatch, useSelector } from "react-redux";

const RecruitCompanyContent = ({
  key,
  imgSrc,
  recruitTitle,
  companyName,
  responseRate,
  region,
  pay,
  onClick, // onClick props 추가
}) => {
  // 북마크
  const dispatch = useDispatch();
  const checkBookmark = (id) => dispatch(setBookmark(id));
  const uncheckBookmark = (id) => dispatch(removeBookmark(id));
  const bookmarkList = useSelector((state) => state.bookmark.bookmarkList);

  return (
    <li className="recruitment_content" onClick={onClick}>
      <div className="content_header">
        <img src={imgSrc} alt="" className="recruitment_image" />
        <button
          className="recruitment_bookmark"
          onClick={() => {
            bookmarkList.includes(key) ? uncheckBookmark(key) : checkBookmark(key);
          }}
        >
          <Bookmark_ic />
        </button>
      </div>
      <div className="content_body">
        <div className="recruitment_title">{recruitTitle}</div>
        <div className="recruitment_companyname">{companyName}</div>
        <div className="recruitment_response_rate">{responseRate}</div>
        <div className="recruitment_region">{region}</div>
        <div className="recruitment_pay">채용보상금 {pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
      </div>
    </li>
  );
};

export default RecruitCompanyContent;
