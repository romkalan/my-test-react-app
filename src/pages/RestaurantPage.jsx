import {useState} from "react";
import Tabs from "../components/tabs/Tabs.jsx";
import Restaurant from "../components/restaurant/Restaurant.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantModule} from "../redux/entities/restaurant/selectors.js";

function RestaurantPage() {
    const restaurants = useSelector(selectRestaurantModule);

    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const restaurantId = restaurants.ids.find(
        (id) => id === activeRestaurantId
    );

    return (
        <div>
            <Tabs onChange={setActiveRestaurantId}/>
            {restaurantId && <Restaurant id={restaurantId}/>}
        </div>
    );
}

export default RestaurantPage;
