import styles from './styles.module.scss';
import classNames from "classnames";
import Menu from "../Menu/Menu.jsx";

function Restaurant({name, menu}) {
    return (
        <div className={classNames(styles.root)}>
            <h2>{name}</h2>
            <p>Menu of the Restaurant</p>
            <Menu menu={menu}/>
        </div>
    );
}

export default Restaurant;
