import React, { useState } from "react";

const TestRegisterLocal = () => {
  const [userEmail, setUserEmail] = useState("");
  const [check, setCheck] = useState(false);

  const saveData = () => {
    const userObj = { name: userEmail };
    window.localStorage.setItem("userName", JSON.stringify(userObj));
  };

  const callData = () => {
    setCheck(true);
  };

  const onChange = (e) => {
    setUserEmail(e.target.value);
    setCheck(false);
  };
  return (
    <div>
      <input
        name="userEmail"
        value={userEmail}
        onChange={onChange}
        placeholder="이메일을 입력하세요!"
      />
      <button onClick={saveData}>저장하기</button>
      <button onClick={callData}> 불러오기</button>

      {check ? <p>{window.localStorage.getItem("userName")}</p> : <> </>}
    </div>
  );
};

export default TestRegisterLocal;