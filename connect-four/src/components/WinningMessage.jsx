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
                <div className="columns is-flex is-flex-direction-column">
                    <div className="column">
                        <div className="title is-2">{winMessage}</div>
                    </div>
                    <div className="column is-centered">
                    <button className="button is-info is-medium" onClick={resetGame}>Play again</button>
                    </div>
                </div>
            </div>
            </div>
            <button className="modal-close is-large" onClick={toggleModal} aria-label="close"></button>
        </div>
    )
}

export default WinningMessage;