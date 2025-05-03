import styles from './styles.module.scss';
import Button from "../button/Button.jsx";
import classNames from "classnames";

function Header({isHiglighted}) {
    return (
        <header className={classNames(styles.root, {[styles.higlighted]: isHiglighted})}>
            <div>Header</div>
            <Button title="menu" onClick={() => console.log('Hello')}/>
            <Button title="sign in" onClick={() => console.log('Bye')}/>
        </header>
    );
}

export default Header;
