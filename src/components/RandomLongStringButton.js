import React, { useState } from 'react';
import styles from '../styles/RandomLongStringButton.css';
import { generateRandomString } from '../utils/generateRandomString';

const RandomLongStringButton = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onToggle(isActive ? generateRandomString() : '');
  };

  return (
    <button
      id="random-long-string-button"
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      Random Long String Mode
    </button>
  );
};

export default RandomLongStringButton;