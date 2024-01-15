import React from 'react';
import styles from '@/styles/Modal.module.css';
import UserAuth from './UserAuth';
import { FaRegTimesCircle } from 'react-icons/fa';

const Modal = ({ show, onClose, onSuccess }) => {
  return (
    <>
      <div
        data-testid="modal-overlay"
        className={`${styles.modalOverlay} ${show ? styles.show : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div data-testid="modal-overlay" className={styles.modalWrapper}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h1>Login/SignUp</h1>
              </div>
              <button
                data-testid="modal-close-button"
                onClick={onClose}
                className="pointer bg-transparent text-black text-xl"
              >
                <FaRegTimesCircle />
              </button>
            </div>
            <div data-testid="auth-modal" className={styles.modalBody}>
              <UserAuth onSuccess={onSuccess} onClose={onClose} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
