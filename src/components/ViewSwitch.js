import React, { useState } from 'react';
import styles from '../styles/ViewSwitch.css';

const ViewSwitch = () => {
  const [activeView, setActiveView] = useState('view1');
  const views = ['view1', 'view2', 'view3', 'view4'];

  const handleViewChange = (view) => {
    setActiveView(view);
    // Emit viewChanged event
    const event = new CustomEvent('viewChanged', { detail: { view } });
    window.dispatchEvent(event);
  };

  return (
    <div id="view-switch" className={styles.container}>
      {views.map((view) => (
        <button
          key={view}
          className={activeView === view ? styles.active : ''}
          onClick={() => handleViewChange(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewSwitch;