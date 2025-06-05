import Dish from "../dish/Dish.jsx";

function Cart({productIds}) {
    return (
        <div>
            {productIds?.length
                ? productIds.map((productId) => <Dish id={productId} key={productId} />)
                : "Empty"
            }
        </div>
    );
}

export default Cart;
