import styles from './styles.module.scss';
import classNames from "classnames";
import Menu from "../Menu/Menu.jsx";
import {useContext} from "react";
import UserContext from "../../contexts/user.js";

function Restaurant({name, menu}) {
    const {user} = useContext(UserContext);

    if (!user) return null;

    return (
        <div className={classNames(styles.root)}>
            <h2>{name}</h2>
            <div className={classNames(styles.menuPosition)}>
                <p>Menu of the Restaurant</p>
                <p>Change count</p>
            </div>
            <Menu menu={menu}/>
        </div>
    );
}

export default Restaurant;
