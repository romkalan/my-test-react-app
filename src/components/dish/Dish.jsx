import Button from "../button/Button.jsx";
import Size from "../../constants/Size.js";
import {useState} from "react";
import classNames from "classnames";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {selectDish} from "../../redux/entities/dishes/selectors.js";

function Dish({id}) {
    const dish = useSelector((state) => selectDish(state, id))
    const [value, setValue] = useState(0);
    const styleOfValue = value === 0 ? styles.disabledButton : styles.standardButton;

    return (
        <div className={classNames(styles.root)}>
            <p>{dish.name} is {dish.price}$</p>
            <div className={classNames(styles.boxOfButtons)}>
                <Button className={classNames(styles.buttonSize)} size={Size.s}
                        onClick={() => setValue(value - 1)} isDisabled={value === 0}>-</Button>
                {value}
                <Button className={classNames(styles.buttonSize)} size={Size.s}
                        onClick={() => setValue(value + 1)} isDisabled={value === 5}>+</Button>
            </div>
        </div>
    );
}

export default Dish;
