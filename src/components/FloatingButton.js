import React, { useState } from 'react';
import Overlay from './Overlay';
import { moveElement } from '../utils/moveElement';
import styles from '../styles/FloatingButton.css';

const FloatingButton = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleMouseDown = (event) => {
    moveElement(event, 'floating-button');
  };

  const handleButtonClick = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div>
      <button
        id="floating-button"
        className={styles.button}
        onMouseDown={handleMouseDown}
        onClick={handleButtonClick}
      >
        DevTool
      </button>
      {isOverlayOpen && <Overlay />}
    </div>
  );
};

export default FloatingButton;