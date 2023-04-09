import { useState } from 'react';
import Modal from './Modal';
import player1Image from '../assets/red-banner.png';
import player2Image from '../assets/yellow-banner.png';
import tieImage from '../assets/gray-banner.png';

const WinningMessage = ({winMessage, resetGame, result}) => {

    const [isModal, setIsModal] = useState(true);

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    let background;

    if (winMessage === 'Player 1 won') {
        background = player1Image;
    } else if (winMessage === 'Player 2 won') {
        background = player2Image;
    } else {
        background = tieImage;
    }

    const modalContent = (
        <div>
            <div className="title is-2">{winMessage}</div>
            <button className="button is-info is-medium" onClick={resetGame}>Play again</button>
        </div>
    );

    return(
        <div>
            <Modal modalContent={modalContent} background={background} isModal={isModal} toggleModal={toggleModal} />
        </div>
    )
}

export default WinningMessage;