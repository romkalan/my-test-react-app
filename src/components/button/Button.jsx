import styles from './styles.module.scss';
import classNames from "classnames";
import Size from "../../constants/Size.js";

const SizeClass = {
    [Size.s]: styles.s,
    [Size.m]: styles.m,
    [Size.l]: styles.l,
}

function Button({children, onClick, className, size = Size.m, isDisabled = false}) {
    return (
        <button disabled={isDisabled}
                className={classNames(className, styles.root, SizeClass[size])}
                onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
