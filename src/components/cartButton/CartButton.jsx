import {useRef, useState} from "react";
import {createPortal} from "react-dom";
import CartContainer from "../cart/CartContainer.jsx";
import classNames from "classnames";
import styles from "./styles.module.scss";

function CartButton({amount}) {
    const [coordinates, setCoordinates] = useState(null);
    const buttonRef = useRef();

    const openCart = () => {
        if (coordinates) {
            setCoordinates(null);
            return;
        }
        const {bottom, left} = buttonRef.current.getBoundingClientRect();
        setCoordinates({left: left, top: bottom});
    }

    return (
        <div className={classNames(styles.root)}>
            <button ref={buttonRef} onClick={openCart}>
                <h2>Cart</h2>
            </button>
            {coordinates && createPortal(
                <div style={{left: coordinates.left, top: coordinates.top}} className={classNames(styles.modal)}>
                    <CartContainer/>
                </div>, document.getElementById("popup-container")
            )}
        </div>
    );
}

export default CartButton;
