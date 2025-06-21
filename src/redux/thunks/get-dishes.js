import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectDishIds} from "../entities/dishes/index.js";
import {selectRestaurantMenuById} from "../entities/restaurants/index.js";

const getDishesByRestaurantId = createAsyncThunk(
    'dish/getDishesByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantsId=${restaurantId}`);

        return await response.json();
    },
    {condition: (restaurantId, {getState}) => {
        const restaurantDishIds = selectRestaurantMenuById(getState(), restaurantId);
        const dishIds = selectDishIds(getState());

        return !restaurantDishIds.every(id => dishIds.includes(id));
    }}
);

export default getDishesByRestaurantId;
