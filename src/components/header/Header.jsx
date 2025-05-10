import styles from './styles.module.scss';
import Button from '../button/Button.jsx';
import classNames from "classnames";
import Size from "../../constants/Size.js";

function Header({isHiglighted}) {
    return (
        <header className={classNames(styles.root, {[styles.higlighted]: isHiglighted})}>
            <h1>Header</h1>
            <Button size={Size.l} className={styles.pageLink} onClick={() => console.log('Hello')}>Menu</Button>
            <Button className={styles.pageLink} onClick={() => console.log('Bye')}>Sign in</Button>
        </header>
    );
}

export default Header;
