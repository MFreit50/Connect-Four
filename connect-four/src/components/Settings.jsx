import { useState } from 'react';

function Settings({ isMuteChip, setIsMuteChip, handlePressButton }) {
  const handleMuteClick = () => {
    setIsMuteChip(!isMuteChip);
    handlePressButton('MUTE ' + !isMuteChip);
  };

  return (
    <div className="Settings">
      <button 
        className={`button is-large ${!isMuteChip ? 'is-danger' : 'is-primary'}`} 
        onClick={handleMuteClick} id="mute-button"
      >
        {isMuteChip ? 
          <i className="fa-solid fa-volume-high"></i>
          : <i className="fa-solid fa-volume-xmark"></i>
        }
      </button>
    </div>
  );
}

export default Settings;