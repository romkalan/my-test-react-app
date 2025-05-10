import styles from './styles.module.scss';
import classNames from "classnames";

function Footer() {
    return (
        <footer className={classNames(styles.root, styles.footer)}><h1>Footer</h1></footer>
    );
}

export default Footer;
