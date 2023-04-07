import { useState } from 'react';
import Chip from './Chip';


const BoardRow = ({ row, placeMove, symbol, game }) => {
  return (
    <tr>
      {row.map((chip, i) => (
        <Chip
          columnIndex={i}
          value={chip}
          placeMove={placeMove}
          symbol={symbol}
          game={game}
          key={i}
        />
      ))}
    </tr>
  );
};
export default BoardRow;