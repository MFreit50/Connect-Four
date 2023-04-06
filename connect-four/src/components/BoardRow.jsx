import { useState } from 'react';
import Chip from './Chip';


const BoardRow = ({row, placeMove, symbol}) => {

    return (
        <tr>
            {row.map((chip, i) => (
                <Chip columnIndex={i} value={chip} placeMove={placeMove} symbol={symbol} key={i}/>))}
        </tr>
    );
}

export default BoardRow;