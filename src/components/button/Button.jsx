import styles from './styles.module.scss';
import classNames from "classnames";
import Size from "../../constants/Size.js";
import {useContext} from "react";
import ThemeContext from "../../contexts/theme.js";

const SizeClass = {
    [Size.s]: styles.s,
    [Size.m]: styles.m,
    [Size.l]: styles.l,
}

function Button({children, onClick, className, size = Size.m, isDisabled = false}) {
    const theme = useContext(ThemeContext);

    return (
        <button disabled={isDisabled}
                className={classNames(className, styles.root, SizeClass[size], styles[theme])}
                onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
