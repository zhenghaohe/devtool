import React from 'react';
import styles from '../styles/StyleSheetItem.css';

const StyleSheetItem = ({ styleSheet, onEdit, onDelete }) => {
  return (
    <div className={styles.styleSheetItem}>
      <div className={styles.styleSheetInfo}>
        <span className={styles.styleSheetName}>{styleSheet.name}</span>
        <span className={styles.styleSheetUrl}>{styleSheet.url}</span>
      </div>
      <div className={styles.styleSheetActions}>
        <button className={styles.editButton} onClick={() => onEdit(styleSheet.id)}>Edit</button>
        <button className={styles.deleteButton} onClick={() => onDelete(styleSheet.id)}>Delete</button>
      </div>
    </div>
  );
};

export default StyleSheetItem;