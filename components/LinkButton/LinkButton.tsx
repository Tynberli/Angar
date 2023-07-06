import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './LinkButton.module.scss';

const LinkButton = ({ buttonText, buttonStyle, textlink }: {
    buttonText: string,
    buttonStyle: string,
    textlink: string,
  }) => {
    
    return (
        <>
            <Link href={textlink} className={`${styles.button} ${styles[buttonStyle]}`} target='_blank'>
                {buttonText}
            </Link>
        </>
    );
};

LinkButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string,
    textlink: PropTypes.string,
};

export default LinkButton;