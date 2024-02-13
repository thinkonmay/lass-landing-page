'use client';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './popup.scss';
import Guide from '../guide/guide';
import exp from 'constants';
import Icon from '../icon';

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}
function Popup(props: Props) {
    const { open, setOpen, children } = props;

    function closeModal() {
        setOpen(false);
    }
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
