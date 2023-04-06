import { useState } from 'react';
import Chip from './Chip';


const BoardRow = ({row, placeMove}) => {

    return (
        <>
            {row.map((chip, i) => (
                <Chip columnIndex={i} value={chip} placeMove={placeMove} key={i} />))}
        </>
    );
}

export default Chip;