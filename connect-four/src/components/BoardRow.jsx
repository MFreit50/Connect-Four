import { useState } from 'react';
import Chip from './Chip';

const BoardRow = ({ row, placeMove, game, winMessage, pressButtonValue }) => {
  return (
    <tr>
      {row.map((chip, i) => (
        <Chip
          columnIndex={i}
          value={chip}
          placeMove={placeMove}
          winMessage={winMessage}
          game={game}
          pressButtonValue={pressButtonValue}
          key={i}
        />
      ))}
    </tr>
  );
};

export default BoardRow;