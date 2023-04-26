import React from 'react';
import '../../styles/style.css';
import InsightButtonSlider from './InsightButtonSlider';
import InsightContent from './InsightContent';
import { ReactComponent as QuestionMark_ic } from '../../assets/svg/ic_questionmark.svg';
import { ReactComponent as ArrowDown_ic } from '../../assets/svg/ic_arrow_down.svg';
import { ReactComponent as ArrowRight_ic } from '../../assets/svg/ic_arrow_right.svg';
import { ReactComponent as ArrowLeft_ic } from '../../assets/svg/ic_arrow_left.svg';
import { ReactComponent as Mainbottom1_ic } from '../../assets/svg/ic_mainbottom_1.svg';
import { ReactComponent as Mainbottom2_ic } from '../../assets/svg/ic_mainbottom_2.svg';
import { ReactComponent as Mainbottom3_ic } from '../../assets/svg/ic_mainbottom_3.svg';
import { ReactComponent as Mainbottom4_ic } from '../../assets/svg/ic_mainbottom_4.svg';

import EventContent from './EventContent';
import BannerSlider from './BannerSlider';
import EventSlider from './EventSlider';
import AsideBanner from './AsideBanner';

const HomeMain = () => {
  return (
    <div>
      <section className="whole_section">
        <div className="top_banner">
          <div className="main_banner_left_btn">
            <ArrowLeft_ic />
          </div>
          <div className="banners">
            <BannerSlider />
          </div>
          <div className="main_banner_right_btn">
            <ArrowRight_ic />
          </div>
        </div>
        <section className="middle_section">
          <div className="middle_section_wrap">
            <div className="tagslide">
              <div className="title_wrap">
                <h2>나에게 필요한 커리어 인사이트</h2>
                <QuestionMark_ic />
              </div>
              <div className="slider_aside_wrap">
                <div className="interest_buttons">
                  <InsightButtonSlider />
                </div>
                <AsideBanner />
              </div>
            </div>
            <ul id="careerContentList">
              <InsightContent
                imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220325%2F2%2F30421546.jpg&w=750&q=100"
                title="LINE X Wanted Session 5-2"
                content="꼭 조직에서, 업무에서만 애자일을 적용하는 걸까요? 개인의 역량을 개발하기 위해서도 애자일을 사용할 수 있습니다. 개인의 역량을 높이는 것 뿐만아니라 개인이 안전하게 애자일을 시도해 보는 것에 대하여 이야기 합니다."
                logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                author="라인플러스 고종범"
              />
              <InsightContent
                imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220325%2F2%2F30421546.jpg&w=750&q=100"
                title="LINE X Wanted Session 5-2"
                content="꼭 조직에서, 업무에서만 애자일을 적용하는 걸까요? 개인의 역량을 개발하기 위해서도 애자일을 사용할 수 있습니다. 개인의 역량을 높이는 것 뿐만아니라 개인이 안전하게 애자일을 시도해 보는 것에 대하여 이야기 합니다."
                logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                author="라인플러스 고종범"
              />
              <InsightContent
                imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220325%2F2%2F30421546.jpg&w=750&q=100"
                title="LINE X Wanted Session 5-2"
                content="꼭 조직에서, 업무에서만 애자일을 적용하는 걸까요? 개인의 역량을 개발하기 위해서도 애자일을 사용할 수 있습니다. 개인의 역량을 높이는 것 뿐만아니라 개인이 안전하게 애자일을 시도해 보는 것에 대하여 이야기 합니다."
                logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                author="라인플러스 고종범"
              />
              <InsightContent
                imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220325%2F2%2F30421546.jpg&w=750&q=100"
                title="LINE X Wanted Session 5-2"
                content="꼭 조직에서, 업무에서만 애자일을 적용하는 걸까요? 개인의 역량을 개발하기 위해서도 애자일을 사용할 수 있습니다. 개인의 역량을 높이는 것 뿐만아니라 개인이 안전하게 애자일을 시도해 보는 것에 대하여 이야기 합니다."
                logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                author="라인플러스 고종범"
              />
            </ul>
            <div className="moreContent">
              <div className="moreContent_btn" id="moreContent_btn">
                <p>더 많은 콘텐츠 보기</p>
                <ArrowDown_ic />
              </div>
            </div>
          </div>
        </section>
        <div className="typetest_banner">
          <div className="banner_wrap">
            <div>내 유형과 가장 잘 어울리는 회사는?</div>
            <div className="gotxt_wrap">
              유형테스트 하러가기
              <ArrowRight_ic />
            </div>
          </div>
        </div>
        <div className="divider_container"></div>
        <div className="line_banner">
          <p>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.</p>
          <p>👀</p>
          <ArrowRight_ic />
        </div>
        <section className="event_section">
          <div className="event_banner_header">
            <div className="btn event_left_btn">
              <ArrowLeft_ic />
            </div>
            <div className="center_txt">
              <h2>커리어 성장을 위한 맞춤 이벤트</h2>
              <div className="moreEvent_btn">
                <span>이벤트 전체보기</span>
                <ArrowRight_ic width="15" height="15" fill="#8a8a8a" />
              </div>
            </div>
            <div className="btn event_right_btn">
              <ArrowRight_ic />
            </div>
          </div>
          <div className="banner_main">
            <ul className="eventList">
              <EventSlider />
            </ul>
          </div>
        </section>
        <div className="divider_container"></div>
        <section className="recruit_section">
          <div>
            <h2>채용 정보를 찾고 계셨나요?</h2>
          </div>
          <div className="menu_container">
            <div className="menu_btn">
              <div className="icon">
                <Mainbottom1_ic />
              </div>
              <div className="text">
                <span>채용공고</span>
                <ArrowRight_ic />
              </div>
            </div>
            <div className="menu_btn">
              <div className="icon">
                <Mainbottom2_ic />
              </div>
              <div className="text">
                <span>내 프로필</span>
                <ArrowRight_ic />
              </div>
            </div>
            <div className="menu_btn">
              <div className="icon">
                <Mainbottom3_ic />
              </div>
              <div className="text">
                <span>매치업</span>
                <ArrowRight_ic />
              </div>
            </div>
            <div className="menu_btn">
              <div className="icon">
                <Mainbottom4_ic />
              </div>
              <div className="text">
                <span>직군별 연봉</span>
                <ArrowRight_ic />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomeMain;
