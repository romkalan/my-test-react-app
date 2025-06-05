import {useSelector} from "react-redux";
import {selectProductAmount} from "../../redux/ui/cart/index.js";
import CartButton from "./CartButton.jsx";

function CartButtonContainer() {
    const amount = useSelector(selectProductAmount);
    return (
        <CartButton amount={amount} />
    );
}

export default CartButtonContainer;
