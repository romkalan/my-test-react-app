import Dish from "../dish/Dish.jsx";
import {useSelector} from "react-redux";
import {selectDishIds} from "../../redux/entities/dishes/selectors.js";

function Menu({menu}) {
    const dishIds = useSelector(selectDishIds);

    const dishesListIds = dishIds.filter((dishId) => menu.includes(dishId));

    const menuList = dishesListIds && dishesListIds.map((id, index) => {
        return (
            <li key={index}>
                <Dish id={id} />
            </li>
        );
    })
    return (
        <ul>{menuList}</ul>
    );
}

export default Menu;
