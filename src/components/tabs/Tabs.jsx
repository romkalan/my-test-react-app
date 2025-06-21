import Tab from "../tab/tab.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../redux/entities/restaurants/selectors.js";

function Tabs({onChange}) {
    const restaurantsId = useSelector(selectRestaurantIds);

    const tabsItem = restaurantsId.map((id) =>
        <Tab key={id} id={id} onClick={() => onChange(id)}/>
    );

    return (
        <div style={{ display: "flex"}}>
            {tabsItem}
        </div>
    );
}

export default Tabs;
