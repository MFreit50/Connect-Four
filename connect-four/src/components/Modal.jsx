import {useState} from 'react';

const Modal = ({modalContent}) => {
    const [isModal, setIsModal] = useState(true);
    const toggleModal = () => {
        setIsModal(!isModal);
    }
    
    return(
        <div className={`modal ${isModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box is-centered">
                    {modalContent}
                </div>
            </div>
        </div>
    )
} 