import { useState } from 'react';

function Settings({ isMuteChip, setIsMuteChip, handlePressButton }) {
  const handleMuteClick = () => {
    setIsMuteChip(!isMuteChip);
    handlePressButton('MUTE ' + !isMuteChip);
  };

  return (
    <div className="Settings">
      <button onClick={handleMuteClick}>
        {isMuteChip ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
}

export default Settings;