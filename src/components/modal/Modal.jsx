import {useMemo} from "react";
import {createPortal} from "react-dom";
import classNames from "classnames";
import styles from "./styles.module.scss";
import LoginForm from "../loginForm/LoginForm.jsx";


function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;

    const modalContainer = useMemo(
        () => document.getElementById('modal-container'),
        []
    );

    return createPortal(
        <>
            <button onClick={onClose} className={classNames(styles.overlay)}/>
            <div className={classNames(styles.root)}>
                <div className={classNames(styles.modal)}>
                    <h1>{children}</h1>
                    <LoginForm onClose={onClose}/>
                    <button className={classNames(styles.buttonSize)} onClick={onClose}>close</button>
                </div>
            </div>
        </>,
        modalContainer
    );
}

export default Modal;
