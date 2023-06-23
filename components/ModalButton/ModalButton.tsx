import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import styles from './ModalButton.module.scss';

const ModalButton = ({ buttonText, buttonStyle, modalTitle, modalContent }: {
  buttonText: string,
  buttonStyle: string,
  modalTitle: string,
  modalContent: React.ReactNode
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className={`${styles.button} ${styles[buttonStyle]}`} onClick={openModal}>
        {buttonText}
      </button>
      {modalOpen && (
        <Modal title={modalTitle} onClose={closeModal}>
              {Array.isArray(modalContent) ? modalContent : [modalContent]}
        </Modal>
      )}
    </>
  );
};

ModalButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.node.isRequired,
};

export default ModalButton;
