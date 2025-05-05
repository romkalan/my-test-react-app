import Restaurant from "../restaurant/Restaurant.jsx";

function Restaurants({restaurants}) {
    const restaurantsList =
        restaurants &&
        restaurants.map(({id, name, menu}) => {
            return (
                <li key={id}>
                    <Restaurant name={name} menu={menu}/>
                </li>
            )
        });

    return (
        <div>
            <ul>{restaurantsList}</ul>
        </div>

    );
}

export default Restaurants;
