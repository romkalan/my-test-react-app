import styles from './styles.module.scss';
import Button from '../button/Button.jsx';
import classNames from "classnames";
import Size from "../../constants/Size.js";
import {useContext, useState} from "react";
import UserContext from "../../contexts/user.js";
import Modal from "../modal/Modal.jsx";

function Header({isHiglighted}) {
    const {user} = useContext(UserContext);
    const userName = user === null ? "Login" : user.name;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={classNames(styles.root, {[styles.higlighted]: isHiglighted})}>
            <h1>Header</h1>
            <Button
                className={classNames(styles.pageLink)}
                children={userName}
                size={Size.l}
                onClick={() => setIsOpen(true)}
            />
            <Modal isOpen={isOpen} children={"Модальное окно"} onClose={() => setIsOpen(false)}/>
        </header>
    );
}

export default Header;
