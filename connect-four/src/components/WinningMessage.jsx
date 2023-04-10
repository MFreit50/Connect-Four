import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import player1Image from '../assets/red-banner.png';
import player2Image from '../assets/yellow-banner.png';
import tieImage from '../assets/gray-banner.png';

import winSound from '../assets/win-sound.mp3';
import tieSound from '../assets/tie-sound.mp3';

const WinningMessage = ({ winMessage, resetGame, result, pressButtonValue }) => {
  const [isModal, setIsModal] = useState(true);
  const hoverAudioRef = useRef(null);
  const clickAudioRef = useRef(null);
  const winAudioRef = useRef(null);
  const tieAudioRef = useRef(null);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  let background;
  let sound;

  if (winMessage === 'Player 1 won') {
    background = player1Image;
    sound = winSound;
  } else if (winMessage === 'Player 2 won') {
    background = player2Image;
    sound = winSound;
  } else {
    background = tieImage;
    sound = tieSound;
  }

  useEffect(() => {
    if(pressButtonValue === 'MUTE true'){
        if (winMessage === 'Player 1 won' || winMessage === 'Player 2 won') {
          winAudioRef.current = new Audio();
          winAudioRef.current.src = sound;
          winAudioRef.current.play();
        } else{
          tieAudioRef.current = new Audio();
          tieAudioRef.current.src = sound;
          tieAudioRef.current.play();
        }
    }
  }, [result, sound]);

  const modalContent = (
    <div>
      <div className="title is-2">{winMessage}</div>
      <button className="button is-info is-medium" onClick={resetGame}>
        Play again
      </button>
    </div>
  );

  return (
    <div>
      <Modal
        modalContent={modalContent}
        background={background}
        isModal={isModal}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default WinningMessage;