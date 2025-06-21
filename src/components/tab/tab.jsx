import {useSelector} from "react-redux";
import {selectRastaurant} from "../../redux/entities/restaurants/selectors.js";

function Tab({id, onClick}) {
    const restaurant = useSelector((state) => selectRastaurant(state, id));

    return (
      <div style={{padding: "15px"}}>
          <button onClick={onClick}>{restaurant.name}</button>
      </div>
    );
}

export default Tab;
