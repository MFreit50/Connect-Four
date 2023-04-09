import { useState } from 'react';

const Modal = ({ modalContent, background, isModal, toggleModal }) => {

    const modalContentStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: '50%',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      maxHeight: '500px',
      maxWidth: '800px',
      
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    };

    return (
        <div className={`modal ${isModal ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-content" style={modalContentStyle}>
                {modalContent}
            </div>
            <button className="modal-close is-large" onClick={toggleModal} aria-label="close"></button>
        </div>
    )
}

export default Modal;