import React, { useState, useEffect, useRef } from "react";
import "../../styles/modal_login_join.css";
import { ReactComponent as Logo_txt } from "../../assets/svg/logo_txt.svg";
import { ReactComponent as Apple_ic } from "../../assets/svg/ic_social_apple.svg";
import { ReactComponent as Facebook_ic } from "../../assets/svg/ic_social_facebook.svg";
import { ReactComponent as Google_ic } from "../../assets/svg/ic_social_google.svg";
import { ReactComponent as Kakao_ic } from "../../assets/svg/ic_social_kakao.svg";
import JoinModal from "./JoinModal";

const LoginModal = ({ setModalOpen, setModalMode, setcheckedEmail }) => {
  const inputRef = useRef();

  const localStorage = window.localStorage;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //   const closeModal = () => {
  //     setModalOpen(false);
  //     setModalMode(1);
  //   };
  const showJoinModal = () => {
    setModalMode(2);
    setcheckedEmail(inputRef.current.value);
  };

  const showPasswordModal = () => {
    setModalMode(3);
    setcheckedEmail(inputRef.current.value);
  };

  const handleOnclick = () => {
    console.log(localStorage.getItem("loginEmail"));
    console.log(localStorage.getItem("loginPassword"));
    IsEmailExist(inputRef.current.value) ? showPasswordModal() : showJoinModal();
  };

  const IsEmailExist = (email) => {
    let emails = localStorage.getItem("loginEmail");
    if (emails === null) {
      return false;
    } else {
      if (emails.includes(email)) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className="login_modal_content" id="modal_content">
      <div className="loginmodal_title">
        <Logo_txt />
        <h1>나다운 일의 시작, 원티드</h1>
        <h2>
          취업, 이직, 커리어 콘텐츠까지
          <br />
          커리어 성장의 모든 것
        </h2>
      </div>
      <form id="login_form" className="login_form" action="">
        <div>
          <label for="userEmail">이메일</label>
        </div>
        <input
          ref={inputRef}
          type="text"
          id="userEmail"
          name="userEmail"
          placeholder="이메일을 입력해주세요."
          onkeyup="emailCheck()"
        />
        <div className="emailNotValid_txt" id="emailNotValid_txt">
          올바른 이메일을 입력해주세요.
        </div>
        <button
          className="continue_btn continue_btn_close contine_btn_open"
          id="continue_btn"
          type="button"
          onClick={handleOnclick}
        >
          이메일로 계속하기
        </button>
        <p>또는</p>
        <div className="socialLogin_btns">
          <button className="apple_btn" type="button">
            <Apple_ic />
            <p>Apple</p>
          </button>
          <button className="facebook_btn" type="button">
            <Facebook_ic />
            <p>Facebook</p>
          </button>
          <button className="google_btn" type="button">
            <Google_ic />
            <p>Google</p>
          </button>
          <button className="kakao_btn" type="button">
            <Kakao_ic />
            <p>Kakao</p>
          </button>
        </div>
        <button className="findacount_btn" type="button">
          계정을 잊으셨나요?
        </button>
        <hr />
        <div className="TOS">
          <a href="">이용약관</a>
          <a href="">개인정보처리방침</a>
        </div>
        <div className="companyname_txt">
          <p>© Wantedlab, Inc.</p>
        </div>
        <div className="language_select">
          <img src="https://static.wanted.co.kr/images/wantedoneid/ico_KR.svg" alt="flag" />
          <select name="language">
            <option value="Korean">한국어</option>
            <option value="English">English</option>
            <option value="Japanese">日本語</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
