import React from "react";
import { ReactComponent as Bell_ic } from "../../assets/svg/ic_bell.svg";

const LoggedUserIcon = () => {
  return (
    <>
      <div className="loggedUserIcon_wrap">
        <Bell_ic />
        <button className="header_profile_btn">
          <img src={"https://static.wanted.co.kr/images/profile_default.png"}></img>
        </button>
      </div>
    </>
  );
};

export default LoggedUserIcon;
