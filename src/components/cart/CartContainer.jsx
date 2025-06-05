import {useSelector} from "react-redux";
import {selectCartProductIds} from "../../redux/ui/cart/index.js";
import Cart from "./Cart.jsx";

function CartContainer() {
    const productIds = useSelector(selectCartProductIds);

    return (
        <>
            <Cart productIds={productIds} />
        </>
    );
}

export default CartContainer;
