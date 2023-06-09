import React from "react";
import "../../styles/style.css";
import { ReactComponent as Bookmark_ic } from "../../assets/svg/ic_bookmark.svg";
import { ReactComponent as BookmarkFill_ic } from "../../assets/svg/ic_bookmark_fill.svg";
import { ReactComponent as ArrowRight_ic } from "../../assets/svg/ic_arrow_right.svg";
import JobListCategory from "./JobListCategory";
import RecruitCompanyContent from "./RecruitCompanyContent";
import dataForRecruitment from "../../datasource/JobList/recruitmentCompany.json";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const JobListMain = () => {
  const navigate = useNavigate();

  function recruitmentClick(id) {
    navigate(`/joblist/${id}`, { state: { key: id } });
  }



  return (
    <main>
      <JobListCategory />
      <div className="recommend_section">
        <div className="bookmark">
          <BookmarkFill_ic />
          <Link to="/bookmarks">
            <span>북마크 모아보기</span>
          </Link>
          <ArrowRight_ic width="12" height="12" fill="#3366FF" />
        </div>
        <div className="section_title">
          <h3>적극 채용 중인 회사</h3>
        </div>
        <div className="company_list">
          <a href="">
            <div className="header">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10681%2Feuxe8m0my9jut6dc__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
            <div className="footer">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ec9320d9.jpg&w=100&q=75"
                alt=""
              />
              <h4>카이아이컴퍼니</h4>
              <h5>5개 포지션</h5>
            </div>
          </a>
          <a href="">
            <div className="header">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F617%2Fozowaqfssuidude6__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
            <div className="footer">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5_dbc7a3c2-7d86-4430-99de-adfc29e978ef.jpg&w=100&q=75"
                alt=""
              />
              <h4>씨알에스큐브</h4>
              <h5>4개 포지션</h5>
            </div>
          </a>
          <a href="">
            <div className="header">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F805%2Fqmeqtcb0lrqseulw__400_400.png&w=400&q=75"
                alt=""
              />
            </div>
            <div className="footer">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.e2774c2c.jpg&w=100&q=75"
                alt=""
              />
              <h4>해줌</h4>
              <h5>8개 포지션</h5>
            </div>
          </a>
          <a href="">
            <div className="header">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23357%2Fpdbfmrjv28x6wqtf__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
            <div className="footer">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.79e48415.jpg&w=100&q=75"
                alt=""
              />
              <h4>웅진</h4>
              <h5>19개 포지션</h5>
            </div>
          </a>
          <a href="">
            <div className="header">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F9451%2Fhpl5uvanjjlxcdam__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
            <div className="footer">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.71283230.png&w=100&q=75"
                alt=""
              />
              <h4>핀브릿지</h4>
              <h5>1개 포지션</h5>
            </div>
          </a>
        </div>
      </div>
      <div className="grid_section">
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

            // <Link to={`/joblist/${company.id}`} key={company.id}>
            //   <RecruitCompanyContent
            //     imgSrc={company.imgSrc}
            //     recruitTitle={company.recruitTitle}
            //     companyName={company.companyName}
            //     responseRate={company.responseRate}
            //     region={company.region}
            //     pay={company.pay}
            //     key={company.id}
            //   />
            // </Link>
          ))}
        </ul>
        <div className="typetest_banner">
          <div className="banner_wrap">
            <div>내 유형과 가장 잘 어울리는 회사는?</div>
            <div className="gotxt_wrap">
              유형테스트 하러가기
              <ArrowRight_ic />
            </div>
          </div>
        </div>
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
    </main>
  );
};

export default JobListMain;
