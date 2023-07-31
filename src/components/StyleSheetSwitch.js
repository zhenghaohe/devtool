import React, { useState } from 'react';
import StyleSheetForm from './StyleSheetForm';
import StyleSheetList from './StyleSheetList';
import { applyStyleSheet, removeStyleSheet } from '../utils';
import styles from '../styles/StyleSheetSwitch.css';

const StyleSheetSwitch = () => {
  const [styleSheets, setStyleSheets] = useState([{ id: '1', name: 'olive', url: '/olive.css', isActive: true }]);

  const handleAddStyleSheet = (name, url) => {
    const newStyleSheet = { id: Date.now().toString(), name, url, isActive: false };
    setStyleSheets(prevStyleSheets => [...prevStyleSheets, newStyleSheet]);
  };

  const handleSwitchStyleSheet = (id) => {
    setStyleSheets(prevStyleSheets =>
      prevStyleSheets.map(sheet =>
        sheet.id === id ? { ...sheet, isActive: true } : { ...sheet, isActive: false }
      )
    );
    const activeSheet = styleSheets.find(sheet => sheet.id === id);
    if (activeSheet) {
      removeStyleSheet(activeSheet.url);
      applyStyleSheet(activeSheet.url);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Style Sheet Switch</h2>
      <StyleSheetForm onAddStyleSheet={handleAddStyleSheet} />
      <StyleSheetList styleSheets={styleSheets} onSwitchStyleSheet={handleSwitchStyleSheet} />
    </div>
  );
};

export default StyleSheetSwitch;