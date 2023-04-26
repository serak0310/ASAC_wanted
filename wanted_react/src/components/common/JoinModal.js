import React from 'react';
import '../../styles/modal_login_join.css';

const JoinModal = ({ setModalOpen, setModalMode }) => {
  return (
    <div class="join_modal_content" id="join_modal_content">
      <div class="joinmodal_wrapper">
        <div class="modal_header">
          <div>
            <button class="backToLogin_btn" id="backToLogin_btn" type="button">
              취소
            </button>
          </div>
          <div>회원가입</div>
          <div></div>
        </div>
        <div class="modal_body">
          <form id="join_form" action="">
            <div class="input_content">
              <div class="formcontent_wrapper">
                <div class="formcontent_title">이메일</div>
                <input
                  type="text"
                  id="userEmail_tf"
                  name="userEmail_tf"
                  placeholder="이메일"
                  disabled="True"
                />
              </div>
              <div class="formcontent_wrapper">
                <div class="formcontent_title">이름</div>
                <input
                  type="text"
                  id="userName_tf"
                  name="userName_tf"
                  placeholder="이름을 입력해주세요."
                />
              </div>
              <div class="formcontent_wrapper">
                <div class="formcontent_title">휴대폰 번호</div>
                <div class="phoneRegion_select">
                  <select name="phoneRegion_select">
                    <option value="KR">South Korea +82</option>
                    <option value="JP">Japan +81</option>
                    <option value="TW">Taiwan +886</option>
                    <option value="HK">Hong Kong +852</option>
                  </select>
                </div>
                <div class="phoneCheck_wrapper">
                  <input
                    type="tel"
                    id="phoneNum_tf"
                    name="phoneNum_tf"
                    placeholder="(예시) 01012345678"
                  />
                  <button
                    type="button"
                    class="phoneNumCheck_btn"
                    disabled="True"
                  >
                    인증번호 받기
                  </button>
                </div>
                <input
                  type="text"
                  id="checkNum_tf"
                  name="checkNum_tf"
                  placeholder="인증번호를 입력해주세요."
                  disabled="True"
                />
              </div>
              <div class="formcontent_wrapper">
                <div class="formcontent_title">비밀번호</div>
                <input
                  type="password"
                  id="pw_tf"
                  name="pw_tf"
                  placeholder="비밀번호를 입력해주세요."
                />
                <input
                  type="password"
                  id="pwCheck_tf"
                  name="pwCheck_tf"
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                />
                <p>
                  영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
                  16자 이하로 입력해주세요.
                </p>
              </div>
            </div>
            <div class="agree_content">
              <div class="formcontent_wrapper">
                <div class="checkbox_wrapper first_checkbox_wrapper">
                  <input type="checkbox" class="agree whole_agree" />
                  <div class="checkbox_text checkbox_wholetitle">전체 동의</div>
                </div>
              </div>
              <hr />
              <div class="formcontent_wrapper">
                <div class="checkbox_wrapper">
                  <input type="checkbox" class="agree age_agree" />
                  <div class="checkbox_text">만 14세 이상입니다. (필수)</div>
                </div>
              </div>
              <div class="formcontent_wrapper">
                <div class="checkbox_wrapper">
                  <input type="checkbox" class="agree tos_agree" />
                  <div class="checkbox_text">원티드 이용약관 동의 (필수)</div>
                  <a href="">자세히</a>
                </div>
              </div>
              <div class="formcontent_wrapper">
                <div class="checkbox_wrapper">
                  <input type="checkbox" class="agree privacy_agree" />
                  <div class="checkbox_text">
                    원티드 개인정보 수집 및 이용 동의 (필수)
                  </div>
                  <a href="">자세히</a>
                </div>
              </div>
              <div class="formcontent_wrapper">
                <div class="checkbox_wrapper">
                  <input type="checkbox" class="agree event_agree" />
                  <div class="checkbox_text">
                    채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기
                  </div>
                </div>
              </div>
            </div>
            <div class="snsagree_content">
              <div class="checkSNS_wrapper">
                <input type="checkbox" class="snscheck email_agree" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <label for="email_agree">이메일</label>
              </div>
              <div class="checkSNS_wrapper">
                <input type="checkbox" class="snscheck apppush_agree" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <label for="apppush_agree">앱 푸쉬</label>
              </div>
              <div class="checkSNS_wrapper">
                <input type="checkbox" class="snscheck message_agree" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <label for="message_agree">문자 메시지</label>
              </div>
            </div>
          </form>
        </div>
        <div class="submit_content">
          <button class="join_btn" id="join_btn" type="button" disabled="true">
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
