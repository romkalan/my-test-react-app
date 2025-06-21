import styles from './styles.module.scss';
import classNames from "classnames";
import Menu from "../Menu/Menu.jsx";
import {useContext} from "react";
import UserContext from "../../contexts/user.js";
import {useSelector} from "react-redux";
import {selectRastaurant} from "../../redux/entities/restaurants/selectors.js";

function Restaurant({id}) {
    const restaurant = useSelector((state) => selectRastaurant(state, id))
    const {user} = useContext(UserContext);

    if (!user) return null;

    return (
        <div className={classNames(styles.root)}>
            <h2>{restaurant.name}</h2>
            <div className={classNames(styles.menuPosition)}>
                <p>Menu of the Restaurant</p>
                <p>Change count</p>
            </div>
            <Menu menu={restaurant.menu} />
        </div>
    );
}

export default Restaurant;
