import { useState } from 'react';
import Chip from './Chip';


const BoardRow = (row, placeMove) => {

    return (
        <tr>
            {row.map((chip, i) => (
                <Chip columnIndex={i} value={chip} placeMove={placeMove} key={i} />))}
        </tr>
    );
}

export default Chip;