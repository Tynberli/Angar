import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Form from "./Form/Form";
import Link from 'next/link';

const Modal = ({ title, onClose, children }: {
    title: string,
    onClose: any,
    children: any,
}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width={18} height={18} viewBox="0 0 18 18"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity={0.5} d="M1 1L17 17M17 1L1 17" stroke="#323232" />
                    </svg>
                </button>
                <Form/>
            </div>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
