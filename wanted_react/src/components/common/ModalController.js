import { useState } from 'react';
import '../../styles/modal_login_join.css';
import LoginModal from './LoginModal';
import JoinModal from './JoinModal';

const ModalController = ({ setModalOpen }) => {
    const [modalMode, setModalMode] = useState(1);
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div className="modal">
        {modalMode === 1 && (
          <LoginModal setModalOpen={setModalOpen} setModalMode={setModalMode} />
        )}
        {modalMode === 2 && (
          <JoinModal
            setModalOpen={setModalOpen}
            setModalMode={setModalMode}
          />
        )}
        {/*registerModalOpen와 loginModalOpen 모두 false면 모달창을 꺼줘야 한다.  */}
        <div className="modal_black" onClick={closeModal}></div>
      </div>
    );
  };
  
  export default ModalController;
