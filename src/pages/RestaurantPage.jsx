import {useEffect, useState} from "react";
import Tabs from "../components/tabs/Tabs.jsx";
import Restaurant from "../components/restaurant/Restaurant.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantModule} from "../redux/entities/restaurants/selectors.js";
import getRestaurants from "../redux/thunks/get-restaurants.js";
import {useGetRestaurantsQuery} from "../redux/services/api.js";

function RestaurantPage() {
    const restaurants = useSelector(selectRestaurantModule);
    const dispatch = useDispatch();

    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const restaurantId = restaurants.ids.find(
        (id) => id === activeRestaurantId
    );

    const data = useGetRestaurantsQuery;
    console.log(data);

    useEffect(() => {
        dispatch(getRestaurants());
    }, []);

    return (
        <div>
            <Tabs onChange={setActiveRestaurantId}/>
            {restaurantId && <Restaurant id={restaurantId}/>}
        </div>
    );
}

export default RestaurantPage;
