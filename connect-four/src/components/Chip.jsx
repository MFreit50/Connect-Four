import { useState, useEffect } from 'react';


const Chip = ({ columnIndex, value, placeMove, symbol }) => {

    const [color, setColor] = useState('white');
    
    const makeMove = (columnIndex) => {
        placeMove(columnIndex);
        determineColor();
    }

    const determineColor = () => {
        //value === true ? 'yellow' : value === false ? 'blue' : 'white'
        if(symbol === true) {
            setColor('yellow');
        } else if(symbol === false) {
            setColor('blue');
        }
        return color
    }
    
        
    

    return(
        <td>
            <div className="chip" onClick={() => makeMove(columnIndex)}>
                <div className={color}>test</div>
            </div>
        </td>
    );
}

export default Chip;