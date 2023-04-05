import { useState, useEffect } from 'react';


const Chip = (columnIndex, value, placeMove) => {

    const [color, setColor] = useState('white');
    
    /* this could cause a bug: is value a state?
    useEffect(() => { //call determineColor only if value changes
        determineColor();
    }, [value])
    */
    
    const determineColor = () => {
        if(value) {
            setColor('yellow');
        } else {
            setColor('blue');
        }
    };

    return(
        <td>
            <div className="chip" onClick={() => placeMove(columnIndex)}>
                <div className={color}>test</div>
            </div>
        </td>
    );
}

export default Chip;