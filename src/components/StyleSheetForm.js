import React, { useState } from 'react';
import styles from '../styles/StyleSheetForm.css';

const StyleSheetForm = ({ onAddStyleSheet }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && url) {
      onAddStyleSheet({ name, url });
      setName('');
      setUrl('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.addButton}>
        Add StyleSheet
      </button>
    </form>
  );
};

export default StyleSheetForm;