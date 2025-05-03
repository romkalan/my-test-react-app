import styles from './styles.module.scss';
import classNames from "classnames";

function Footer() {
    return (
        <footer className={classNames(styles.root, styles.footer)}>Footer</footer>
    );
}

export default Footer;
