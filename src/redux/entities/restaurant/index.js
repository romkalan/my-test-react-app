import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../mock/mock-norm.js";

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        entities: normalizedRestaurants.reduce((acc, restaurant) => {
            acc[restaurant.id] = restaurant;

            return acc;
        }, {}),
        ids: normalizedRestaurants.map(({id}) => id),
    },
});

export default restaurantSlice;
