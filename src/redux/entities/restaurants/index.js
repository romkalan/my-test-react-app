import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../mock/mock-norm.js";
import getRestaurants from "../../thunks/get-restaurants.js";

const entityAdapter = createEntityAdapter();

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        entities: normalizedRestaurants.reduce((acc, restaurant) => {
            acc[restaurant.id] = restaurant;

            return acc;
        }, {}),
        ids: normalizedRestaurants.map(({id}) => id),
    },
    selectors: {
        selectRestaurants: (state, payload) => state.ids,
        selectRestaurantMenuById: (state, payload) => state.menu,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.fulfilled, (state, {payload}) => {
                entityAdapter.setAll(state, payload);
            })
});

export default restaurantSlice;
export const {selectRestaurants, selectRestaurantMenuById} = restaurantSlice.selectors;
