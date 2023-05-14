import React, { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ReactComponent as ArrowLeft_ic } from "../../assets/svg/ic_arrow_left.svg";
import { LoginContext } from "../../context/LoginContext";
// 리덕스
import { useDispatch } from 'react-redux';
import { login } from '../../modules/Login';

const PasswordModal = ({ checkedEmail, setModalOpen, setModalMode }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [buttonChange, setButtonChange] = useState(false);
  const inputRef = useRef();
  // const localStorage = window.localStorage;  //useState
  const { isLogin, setIsLogin } = useContext(LoginContext);

  // 리덕스
  const dispatch = useDispatch();
  const getlogin = () => dispatch(login());

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChange = (event) => {
    setInputPassword(event.target.value);
    if (event.target.value) {
      setButtonChange(true);
    } else {
      setButtonChange(false);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const password = localStorage.getItem("loginPassword");

    if (password === inputRef.current.value) {
      setButtonChange(true);
      setModalMode(0);
      setModalOpen(false);
      // setIsLogin(true);  //useState
      getlogin(); // 리덕스로 로그인
    } else {
      setButtonChange(false);
      setIsLogin(false);
    }
  };

  return (
    <div className="password-modal">
      <div className="password-modal__header">
        <span
          onClick={() => {
            setModalMode(1);
          }}
        >
          <ArrowLeft_ic className="password-modal__back_btn" />
        </span>
        <h1 className="password-modal__title">이메일로 로그인</h1>
        <div> </div>
      </div>
      <div className="password-modal__body">
        <div className="password">
          <form action="" className="password-form">
            <label for="password">
              <p className="password-form__title">비밀번호</p>
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              required
              ref={inputRef}
              onChange={onChange}
            ></input>
          </form>
        </div>
        <button
          disabled={!buttonChange}
          style={buttonChange ? { color: "white", backgroundColor: "#36f" } : null}
          onClick={handleOnSubmit}
        >
          다음
        </button>

        <span>비밀번호 초기화/변경</span>
      </div>
    </div>
  );
};

export default PasswordModal;
