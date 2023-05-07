import React, { useEffect, useState } from "react";
import "../../styles/style.css";
import { ReactComponent as ArrowBold_ic } from "../../assets/svg/ic_arrow_bold.svg";
import { ReactComponent as ArrowDown_ic } from "../../assets/svg/ic_arrow_down.svg";
import { ReactComponent as Warning_ic } from "../../assets/svg/ic_warning.svg";
import { ReactComponent as Share_ic } from "../../assets/svg/ic_share.svg";
import { ReactComponent as Heart_ic } from "../../assets/svg/ic_heart.svg";
import { ReactComponent as Bookmark_blue_ic } from "../../assets/svg/ic_bokmark_blue.svg";
import "../../assets/img/map.png";
import JobDetailTechStack from "./JobDetailTechStack";
import JobDetailSlider from "./JobDetailSlider";
import dummyForRecruitment from "../../datasource/JobList/recruitmentCompany.json";
import KakaoMap from "./KakaoMap";
import RecruitCompanyContent from "../JobList/RecruitCompanyContent";
import { useNavigate } from "react-router-dom";
import JobDetailCompany from "./JobDetailCompany";

const JobDetailMain = ({ pageId }) => {
  const company = dummyForRecruitment.companies.filter((company) => company.id === pageId)[0];
  const navigate = useNavigate();

  function recruitmentClick(id) {
    navigate(`/joblist/${id}`, { state: { key: id } });
  }
  return (
    <main>
      <div className="main_wrapper">
        <div className="top_main">
          <div className="left_main">
            <div className="slide_section">
              <div className="jobdetail_prev_btn">
                <ArrowBold_ic width="24" height="24" />
              </div>
              <div className="jobdetail_next_btn">
                <ArrowBold_ic width="24" height="24" />
              </div>
              <div className="jobdetail_slide_list">
                <JobDetailSlider />
              </div>
            </div>
            <div className="main_inform_section">
              <h2 className="main_inform_title">{company.recruitTitle}</h2>
              <div className="main_inform_middle">
                <h6 className="name">{company.companyName}</h6>
                <div className="feedback_rate">{company.responseRate}</div>
                <div className="region">{company.region}</div>
              </div>
              <ul className="main_inform_tags">
                <li className="inform_tag_item">#인원급성장</li>
                <li className="inform_tag_item">#50명이하</li>
                <li className="inform_tag_item">#설립3년이하</li>
                <li className="inform_tag_item">#스톡옵션</li>
                <li className="inform_tag_item">#워크샵</li>
                <li className="inform_tag_item">#간식</li>
                <li className="inform_tag_item">#원격근무</li>
                <li className="inform_tag_item">#건강검진</li>
                <li className="inform_tag_item">#IT, 컨텐츠</li>
              </ul>
            </div>
            <div className="detail_inform_section">
              <div className="long_txt">
                ＜서비스 소개＞
                <br />
                <br />
                ✓ Medmap – 메디컬 지도를 펼치세요!
                <br />
                메드맵은 의료진과 환자간 커뮤니케이션을 도와주는 솔루션입니다.
                <br />
                <br />
                [블루비커는]
                <br />
                블루비커는 3D 메디컬 콘텐츠 플랫폼 ‘Medmap’을 운영하고 있는 스타트업입니다.
                <br />
                환자와 의료진의 효과적인 커뮤니케이션의 새 기준을 제시하며 메디컬 커뮤니케이션 솔루션을 발전시켜 나가고
                있습니다.
                <br />
                Medmap은 정확하고 다양한 3D 메디컬 콘텐츠를 제공하여 시술 원리와 과정을 쉽게 설명할 수 있도록
                도와줍니다. 또한 환자의 이해를 돕고 신뢰도를 향상 시키며 재방문율을 높일 수 있습니다.
                <br />
                블루비커는 자유롭고 수평적인 분위기에서 각 분야 전문가인 동료들과 최대한의 능력을 발휘하며 함께하고
                있습니다. 원하는 시간과 장소, 언제 어디서나, 블루비커와 함께 할 수 있습니다.
                <br />
                <br />
                블루비커는 의료 분야 커뮤니케이션 서비스의 신규 개발과 고도화를 진행하고 있습니다. 다양한 최신 기술을
                시도하고 접하실 수 있습니다. 저희 회사에 관심이 있다면 언제든지 귀한 능력을 받아들일 준비가
                되어있습니다. 많은 지원 부탁드립니다.
                <br />
                <br />
                [빠르게 성장하고 있습니다]
                <br />
                • 보건산업진흥원 혁신창업 멤버 선정 - 2019
                <br />
                • 디캠프 - 디데이 출전 - 2019
                <br />
                • 정주영 창업 경진 대회 우수상 - 2020
                <br />
                • 마이크로소프트 스타트업 프로그램 선발 -2020
                <br />
                • 소풍벤처스, 블루포인트 파트너스 시드 투자유치 - 2019/2020
                <br />
                • 청년창업사관학교 선발 서울 - 2021
                <br />
                • TIPS 프로그램 선정 - 2021
                <br />
                • 고려대학교구로병원 개방형 실험실 실증사업 선정 - 2022
                <br />
                • 리벤처스 Pre-A 투자유치 - 2022
                <br />
                <br />
                [언론에서 소개된 블루비커]
                <br />
                • 블루비커, '세계보건의 날' 맞아 메디컬 일러스트 플랫폼 공식 론칭(2020.04.16)
                <br />
                http://kr.aving.net/news/articleView.html?idxno=1564478
                <br />
                • 아이쿱-블루비커, 3D 환자 교육 콘텐츠 제휴 (2020.08.25)
                <br />
                https://www.khanews.com/news/articleView.html?idxno=204038
                <br />
                • 메디컬 커뮤니케이션 스타트업 ‘블루비커’, 마이크로소프트 애드인 공식 출시(2021.02.25)
                <br />
                https://platum.kr/archives/158548
                <br />
                <br />
                <strong>주요업무</strong>
                <br />
                ✓ 블루비커와 함께 한국을 넘어 글로벌 무대에서도 메디컬 커뮤니케이션을 혁신 할 "웹 프론트 개발자"를
                모십니다!
                <br />
                <br />
                [주요업무] • React 기반 웹 프론트엔드 개발
                <br />
                • 서비스 코드 최적화 및 성능 개선
                <br />
                • 운영 서비스의 유지보수 및 신규 서비스 론칭
                <br />
                • 주니어 개발자와 협업
                <br />
                <br />
                [개발환경]
                <br />
                • 사용언어: React.js, Next.js, Redux
                <br />
                • 개발환경 및 도구: Github, Postman, Azure Cloud
                <br />
                <br />
                <strong>자격요건</strong>
                <br />
                [자격요건]
                <br />
                • 웹 개발경력이 4년 이상이신 분<br />
                • React 전문성을 보유하신 분<br />
                • Modern Web, JavaScript, Typescript에 대한 깊은 이해가 있으신 분<br />
                • Github을 이용한 협업이 가능하신 분<br />
                • 다른 팀과 협업 및 커뮤니케이션에 능숙하신 분<br />
                • 성장하는 스타트업에서 함께 의미 있는 결과를 만들어 나가고 싶으신 분<br />
                <br />
                <strong>우대사항</strong>
                <br />
                [우대사항]
                <br />
                • 요구사항을 파악하여 데이터 모델과 설계가 가능하신 분<br />
                • 기획, 디자인, 백엔드와 능동적인 협업 및 커뮤니케이션이 가능하신 분<br />
                • 주니어 개발자를 리딩하고 멘토링 가능하신 분<br />
                <br />
                <strong>혜택 및 복지</strong>
                <br />
                [복지 및 혜택]
                <br />
                <br />
                • 여름 방학, 겨울 방학
                <br />
                ▶여름방학 3일, 겨울방학 3일 연차에 따른 휴가비를 추가 지원합니다.
                <br />
                <br />
                • 자율출퇴근제
                <br />
                ▶자율적인 출퇴근 시간 및 원격근무가 가능 합니다.
                <br />
                <br />
                • 자기계발비 지원
                <br />
                ▶세미나, 워크샵, 컨퍼런스, 업무 관련 도서구입비 등 팀원의 성장을 응원합니다.
                <br />
                <br />
                • 건강검진비 지원
                <br />
                ▶ 연 1회 종합건강검진 비용을 지원해 드립니다.
                <br />
                <br />
                • 최고 사양의 개인장비 지원
                <br />
                ▶ iMac, Macbook Pro, 데스크탑, 노트북 등 원하는 개인별 맞춤 디바이스 제공하여 최고의 업무환경을 제공해
                드립니다.
                <br />
                <br />
                •편리한 교통
                <br />
                ▶ 1,4호선 서울역과 연결된 오피스 빌딩
                <br />
                <br />
                •공유오피스
                <br />
                ▶커뮤니티 매니저가 상시 관리하는 최신 시설의 오피스에서 근무합니다.
                <br />
                (에스프레소 머신, Tea, 간식 무제한 제공)
                <br />
                <br />
                •청년내일채움공제
                <br />
                ▶ 지원 대상인 모든 분들께 청년내일채움공제 가입
                <br />
                <br />
                • 경조사비 지원
                <br />
                ▶ 구성원 경조사 발생 시 근조화 및 경조비 지원해 드립니다.
                <br />
                <br />
                • 자유로운 연차/반차 사용
                <br />
                ▶ 업무 스케쥴만 괜찮다면 언제든지 사용 가능합니다.
                <br />
                <br />
                • 스톡옵션 부여
                <br />
                ▶ 기여한 만큼 인정받아요. 성과에 따라 스톡옵션 부여해 드립니다.
                <br />
                <br />
                • 리프레쉬 휴가
                <br />
                ▶3년, 5년, 7년 근속 시 리프레쉬 휴가를 제공합니다. <br />
                <br />
                <br />
                ＜블루비커 개발팀 소개＞
                <br />
                <br />
                ✓ 저희 개발팀은 팀원 모두 새로운 기술과 방법을 도입하는데 주저하지 않고, 신기술에 대한 스터디와 공유를
                즐기며 일하고 있습니다. 합류하시면 자율성과 소통을 바탕으로 좋은 동료들과 함께 일하는 기쁨을 느끼실 수
                있을 것이라 확신합니다.
                <br />
                현재 개발팀은 백엔드, 프론트엔드, 그래픽스, Hololens 2, 네이티브 앱, 클라우드, 데이터베이스 파트로
                구성되어 있습니다. 개발 팀은 내부 기획 파트, 디자인 파트, 그래픽스, 아티스트 파트와 협업 하여 바이오
                메디컬 분야의 서비스 개발을 끊임없이 진행하고 있습니다.
                <br />
                <br />
                [블루비커 기술 스택]
                <br />
                • React, WebGL, Unity, Spring Boot, .Net Core, Kotlin, Swift, Stored Procedure : 개발팀에서 서비스에
                적용하고 있는 기술 스택입니다.
                <br />
                <br />
                • MS Azure Cloud, Netlify : 우리는 마이크로소프트의 Azure Cloud 의 기술들을 서비스에 활용하고 있습니다.
                PaaS App 및 Serverless Functions 와 Static Web App 을 이용한 웹앱, Blob Storage 및 CDN 을 이용한 대용량
                스토리지, Traffic Manager 와 FrontDoor를 이용한 분산처리, Notification Hub 와 PubSub 을 이용한 소켓통신
                등을 사용합니다. 부하분산 처리가 필요하지 않은 단순한 웹 앱들은 Netlify 클라우드 서비스를 사용합니다.
                <br />
                <br />
                • 그래픽스 : 자체적으로 개발한 국내 최고 수준의 WebGL 뷰어와, 마이크로소프트 Hololens2 의 서비스들을
                개발합니다. Blender를 이용해서 모델링한 3D 에셋들을 활용하여 웹과 Hololens2에서 사용하기 위한 최적화를
                진행하여 개발하고 있습니다.
                <br />
              </div>
              <div className="skill_section">
                <h6>기술스택 · 툴</h6>
                <ul className="skill_tags">
                  <JobDetailTechStack tech="Git" />
                  <JobDetailTechStack tech="Azure" />
                  <JobDetailTechStack tech="React" />
                  <JobDetailTechStack tech="Javascript" />
                  <JobDetailTechStack tech="TypeScript" />
                  <JobDetailTechStack tech="Redux" />
                  <JobDetailTechStack tech="Next.js" />
                </ul>
              </div>
            </div>
            <div className="datemap_section">
              <hr />
              <div>
                <span className="datemap_header">마감일</span>
                <span className="datemap_body">{company.dueDate}</span>
              </div>
              <div>
                <span className="datemap_header">근무지역</span>
                <span className="datemap_body">{company.detailLocation}</span>
              </div>
              <div>
                <KakaoMap lat={company.lat} lng={company.lng} />
              </div>
            </div>
            <div className="bottom_banner_section">
              <JobDetailCompany pageId={pageId}/>
              <div className="warning_content">
                <div className="top_warning">
                  <Warning_ic width="24" height="24" />
                  <div className="top_warning_toggle">
                    <h5>
                      본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의
                      <br />
                      용도로 사용할 수 없습니다.
                    </h5>
                    <ArrowDown_ic width="14" height="14" />
                  </div>
                </div>
                <div className="bottom_warning" style={{ display: "none" }}>
                  본 채용 정보는 블루비커에서 제공한 자료를 바탕으로 원티드랩에서 표현을 수정하고 이의 배열 및 구성을
                  편집하여 완성한 원티드랩의 저작자산이자 영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는 전부에
                  대하여 원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수 없으며, 게재된 채용기업의
                  정보는 구직자의 구직활동 이외의 용도로 사용될 수 없습니다. 원티드랩은 블루비커에서 게재한 자료에 대한
                  오류나 그 밖에 원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여 어떠한 보장도 하지 않으며,
                  사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지 않습니다. {"<"}저작권자 (주)원티드랩.
                  무단전재-재배포금지{">"}
                </div>
              </div>
            </div>
          </div>
          <aside className="right_main">
            <div className="right_main_float_container">
              <div className="reward_section">
                <h3>채용보상금</h3>
                <ul>
                  <li>
                    <h4>추천인</h4>
                    <p>500,000원</p>
                  </li>
                  <li>
                    <h4>지원자</h4>
                    <p>500,000원</p>
                  </li>
                </ul>
                <button className="share_btn" type="button">
                  <Share_ic />
                </button>
              </div>
              <div className="btns_section">
                <button className="bookmark_btn" type="button">
                  <Bookmark_blue_ic />
                  북마크하기
                </button>
                <button className="apply_btn" type="button">
                  지원마감
                </button>
              </div>
              <div className="heartlike_section">
                <button className="like_btn">
                  <Heart_ic />
                  10
                </button>
                <button className="likepeople_btn">
                  <ul className="likepeople_list">
                    <li className="likepeople_item">
                      <img
                        src="https://lh3.googleusercontent.com/a/AATXAJyptvBO9pOC55mAwO0IA3-llT_OIJ3QyPcS1-DN=s96-c"
                        alt=""
                      />
                    </li>
                    <li className="likepeople_item">
                      <img
                        src="https://k.kakaocdn.net/dn/chOGWm/btrJ7se3l3K/eeQiZuGgc7rBHKj9Rbr/Fk1/img_110x110.jpg"
                        alt=""
                      />
                    </li>
                    <li className="likepeople_item">
                      <img
                        src="https://lh3.googleusercontent.com/a/ALm5wu2bYv18aK6_ahAXODnanhRHwCfEqvoUbqKJCBKA=s96-c"
                        alt=""
                      />
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          </aside>
        </div>
        <div className="bottom_main">
          <div className="bottom_main_title">
            <h3>이 포지션을 찾고 계셨나요?</h3>
          </div>
          <ul className="recruitment_list">
            {dummyForRecruitment.companies.map((company) => (
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
    </main>
  );
};
export default JobDetailMain;
