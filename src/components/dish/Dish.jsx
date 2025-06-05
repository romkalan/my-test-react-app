import Button from "../button/Button.jsx";
import Size from "../../constants/Size.js";
import classNames from "classnames";
import styles from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectDish} from "../../redux/entities/dishes/selectors.js";
import {cartActions, selectProductAmountById} from "../../redux/ui/cart/index.js";

function Dish({id}) {
    const dish = useSelector((state) => selectDish(state, id))
    const amount = useSelector((state) => selectProductAmountById(state, id));
    const dispatch = useDispatch();

    const increment = () => dispatch(cartActions.increment(id));
    const decrement = () => dispatch(cartActions.decrement(id));

    console.log()

    return (
        <div className={classNames(styles.root)}>
            <p>{dish.name} is {dish.price}$</p>
            <div className={classNames(styles.boxOfButtons)}>
                <Button className={classNames(styles.buttonSize)} size={Size.s}
                        onClick={decrement} isDisabled={amount === 0}>-</Button>
                {amount}
                <Button className={classNames(styles.buttonSize)} size={Size.s}
                        onClick={increment} isDisabled={amount === 5}>+</Button>
            </div>
        </div>
    );
}

export default Dish;
