import {useState} from "react";
import restaurants from "../materials/mock.js";
import Tabs from "../components/tabs/Tabs.jsx";
import Restaurant from "../components/restaurant/Restaurant.jsx";

function RestaurantPage() {
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const activeRestaurant = restaurants.find(
        ({id}) => id === activeRestaurantId
    );

    return (
        <div>
            <Tabs items={restaurants} onChange={setActiveRestaurantId}/>
            {activeRestaurant && <Restaurant name={activeRestaurant.name} menu={activeRestaurant.menu}/>}
        </div>
    );
}

export default RestaurantPage;
