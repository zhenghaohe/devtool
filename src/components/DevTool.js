import React, { useState } from 'react';
import FloatingButton from './FloatingButton';
import Overlay from './Overlay';
import ViewSwitch from './ViewSwitch';
import LocaleSwitch from './LocaleSwitch';
import RandomLongStringButton from './RandomLongStringButton';
import StyleSheetSwitch from './StyleSheetSwitch';
import './DevTool.css';

const DevTool = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [randomLongStringMode, setRandomLongStringMode] = useState(false);

  const handleFloatingButtonClick = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleRandomLongStringButtonClick = () => {
    setRandomLongStringMode(!randomLongStringMode);
  };

  return (
    <div className="dev-tool">
      <FloatingButton onClick={handleFloatingButtonClick} />
      {isOverlayVisible && (
        <Overlay>
          <ViewSwitch />
          <LocaleSwitch disabled={randomLongStringMode} />
          <RandomLongStringButton onClick={handleRandomLongStringButtonClick} />
          <StyleSheetSwitch />
        </Overlay>
      )}
    </div>
  );
};

export default DevTool;