import React from 'react';
import ViewSwitch from './ViewSwitch';
import LocaleSwitch from './LocaleSwitch';
import RandomLongStringButton from './RandomLongStringButton';
import StyleSheetSwitch from './StyleSheetSwitch';
import styles from '../styles/Overlay.css';

const Overlay = ({ isVisible }) => {
  return (
    <div id="overlay" className={styles.overlay} style={{ display: isVisible ? 'block' : 'none' }}>
      <ViewSwitch />
      <LocaleSwitch />
      <RandomLongStringButton />
      <StyleSheetSwitch />
    </div>
  );
};

export default Overlay;