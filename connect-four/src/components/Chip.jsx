import { useState, useEffect } from 'react';

const Chip = ({ columnIndex, value, placeMove, game }) => {
  const [color, setColor] = useState('white');
  const [isHovering, setIsHovering] = useState(false);

  const determineColor = () => {
    return value === true ? 'yellow' : value === false ? 'red' : 'white';
  };

  const logColumnIndex = () => {
    console.log('test', columnIndex, game.chipStack[columnIndex]);
  };

  const virtualChipStyle = {
    position: 'absolute',
    top: `${(603 - game.chipStack[columnIndex] * 100) - game.chipStack[columnIndex] *10}px`,
    transform: `translateX(calc(${columnIndex} * 60px - 50%-50))`,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: `${game.turn%2 !== 0 ? 'rgb(255,213,1)' : 'rgb(255, 50, 1)'}`,
    border: `12px solid ${game.turn%2 !== 0 ? 'rgb(242,203,5)' : 'rgb(220, 50, 0)'}`,
    padding: '10px',
    boxSizing: 'border-box',
    opacity: 0.7,
    zIndex: 1,
  };

  return (
    <td>
      <div
        className="chip"
        onClick={() => placeMove(columnIndex)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={determineColor()}></div>
        {isHovering && game.chipStack[columnIndex] < 6 && (
          <div style={virtualChipStyle} />
        )}
      </div>
    </td>
  );
};

export default Chip;