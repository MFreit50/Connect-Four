import { useState } from 'react';

const WinningMessage = ({winMessage, resetGame}) => {

    const [isModal, setIsModal] = useState(true);

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    return(
        <div className={`modal ${isModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box is-centered">
                <div class="columns is-flex is-flex-direction-column">
                    <div class="column">
                        <div className="block">{winMessage}</div>
                    </div>
                    <div class="column">
                    <button className="button is-info" onClick={resetGame}>Play again</button>
                    </div>
                </div>
            </div>
            </div>
            <button className="modal-close is-large" onClick={toggleModal} aria-label="close"></button>
        </div>
    )
}

export default WinningMessage;