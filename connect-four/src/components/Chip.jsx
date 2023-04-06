import { useState, useEffect } from 'react';


const Chip = ({ columnIndex, value, placeMove}) => {

    const [color, setColor] = useState('white');

    const determineColor = () => {
        return value === true ? 'yellow' : value === false ? 'blue' : 'white';


        /*
        if(value === true) {
            setColor('yellow');
        } else if(value === false) {
            setColor('blue');
        } else {
            setColor('white');
        }
        return color
        */
    }

    return(
        <td>
            <div className="chip" onClick={() => placeMove(columnIndex)}>
                <div className={determineColor()}>test</div>
            </div>
        </td>
    );
}

export default Chip;