import React, { useState } from 'react';
import ModalController from '../common/ModalController';

const LoginButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button class="login_btn" id="login_btn" type="button" onClick={showModal}>
        회원가입/로그인
      </button>
      {/* modalOpen이 true일 때만 모달창이 열림 */}
      {modalOpen ? <ModalController setModalOpen={setModalOpen} /> : null}
    </>
  );
};

export default LoginButton;
