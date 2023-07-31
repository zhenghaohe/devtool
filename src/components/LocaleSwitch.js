import React, { useState } from 'react';
import styles from '../styles/LocaleSwitch.css';

const LocaleSwitch = ({ locales, onLocaleChange }) => {
  const [selectedLocale, setSelectedLocale] = useState(locales[0]);

  const handleLocaleChange = (event) => {
    const newLocale = locales.find(locale => locale.id === event.target.value);
    setSelectedLocale(newLocale);
    onLocaleChange(newLocale);
  };

  return (
    <div id="locale-switch" className={styles.localeSwitch}>
      <select value={selectedLocale.id} onChange={handleLocaleChange} className={styles.localeSelector}>
        {locales.map(locale => (
          <option key={locale.id} value={locale.id}>
            {locale.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitch;