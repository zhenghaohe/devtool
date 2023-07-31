import React from 'react';
import StyleSheetItem from './StyleSheetItem';
import styles from '../styles/StyleSheetList.css';

const StyleSheetList = ({ styleSheets, onStyleSheetChange }) => {
  return (
    <div className={styles.styleSheetList}>
      {styleSheets.map((styleSheet) => (
        <StyleSheetItem
          key={styleSheet.id}
          styleSheet={styleSheet}
          onStyleSheetChange={onStyleSheetChange}
        />
      ))}
    </div>
  );
};

export default StyleSheetList;