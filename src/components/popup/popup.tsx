'use client';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import Modal from 'react-modal';
import Icon from '../icon';
import './popup.scss';

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}
function Popup(props: Props) {
    const { open, setOpen, children } = props;
    const closeModal = () => setOpen(false);

    return (
        <div>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                className="modalContent "
                overlayClassName="modalOverlay"
                contentLabel="Example Modal"
            >
                <div className="toolbar">
                    <button onClick={closeModal}>
                        <Icon src="x"></Icon>
                    </button>
                </div>
                {children}
            </Modal>
        </div>
    );
}

export default Popup;
