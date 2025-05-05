import Dish from "../dish/Dish.jsx";

function Menu({menu}) {
    const menuList = menu && menu.map((dish) => {
        return (
            <li key={dish.id}>
                <Dish dish={dish} />
            </li>
        );
    })
    return (
        <ul>{menuList}</ul>
    );
}

export default Menu;
