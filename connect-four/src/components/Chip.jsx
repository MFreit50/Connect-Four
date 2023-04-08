import { useState, useEffect } from 'react';

const Chip = ({ columnIndex, value, placeMove, game, winMessage }) => {
  const [color, setColor] = useState('white');
  const [isHovering, setIsHovering] = useState(false);

  const determineColor = () => {
    return value === true ? 'yellow' : value === false ? 'red' : 'white';
  };

  const virtualChipStyle = {
    top: `calc(5 * var(--board-size) + 86.5px - ${game.chipStack[columnIndex]} * (var(--board-size) - 20px))`,
    transform: `translateX(calc(${columnIndex} * 60px - 50% - var(--chipSize/2)))`,
    backgroundColor: `${game.turn%2 !== 0 ? 'rgb(255,213,1)' : 'rgb(255, 50, 1)'}`,
    border: `calc(var(--chip-size) * 0.16) solid ${game.turn%2 !== 0 ? 'rgb(237,197,5)' : 'rgb(220, 50, 0)'}`,
  };

  return (
  <td>
      <div
        className="board"
        onClick={() => {
          if (winMessage.length === 0) {
            placeMove(columnIndex);
          }
        }}
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
          ></div>
        )}
      </div>
  </td>
  );
};

export default Chip;