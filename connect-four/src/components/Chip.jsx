import { useState, useEffect, useRef } from 'react';
import hoverSound from '../assets/hover-sound.mp3';
import clickSound from '../assets/place-sound.mp3';

const Chip = ({ columnIndex, value, placeMove, game, winMessage, pressButtonValue }) => {
  const [color, setColor] = useState('white');
  const [isHovering, setIsHovering] = useState(false);
  const hoverAudioRef = useRef(null);
  const clickAudioRef = useRef(null);

  const determineColor = () => {
    return value === true ? 'yellow' : value === false ? 'red' : 'white';
  };

  const virtualChipStyle = {
    top: `calc(5 * var(--board-size) + 110.5px - ${game.chipStack[columnIndex]} * (var(--board-size) - 20px))`,
    transform: `translateX(calc(${columnIndex} * 60px - 50% - var(--chipSize/2)))`,
    backgroundColor: `${game.turn%2 !== 0 ? 'rgb(255,213,1)' : 'rgb(255, 50, 1)'}`,
    border: `calc(var(--chip-size) * 0.16) solid ${game.turn%2 !== 0 ? 'rgb(237,197,5)' : 'rgb(220, 50, 0)'}`,
  };

  useEffect(() => {
    hoverAudioRef.current = new Audio();
    hoverAudioRef.current.src = hoverSound;
    clickAudioRef.current = new Audio();
    clickAudioRef.current.src = clickSound;
    clickAudioRef.current.addEventListener('canplaythrough', () => {
      clickAudioRef.current.removeEventListener('canplaythrough', null);
    });
  }, []);

  useEffect(() => {
    if (isHovering && game.chipStack[columnIndex] < 6 && pressButtonValue === 'MUTE true') {
      hoverAudioRef.current.play();
    }
  }, [isHovering, pressButtonValue]);

  const handleClick = () => {
    if (winMessage.length === 0) {
      placeMove(columnIndex);
      if(game.chipStack[columnIndex] < 6 && pressButtonValue === 'MUTE true'){
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play();
      }
    }
  };

  const handleHoverStart = () => {
    setIsHovering(true);
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    handleClick();
  };

  return (
    <td>
      <div
        className="board"
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={determineColor()}></div>
        {isHovering && game.chipStack[columnIndex] < 6 && winMessage.length === 0 && (
          <div
            className="virtualChip"
            style={{
              ...virtualChipStyle,
            }}
            onTouchStart={handleHoverStart}
            onTouchEnd={handleHoverEnd}
          ></div>
        )}
      </div>
    </td>
  );
};

export default Chip;