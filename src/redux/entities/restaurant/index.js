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
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.fulfilled, (state, {payload}) => {

            })
});

export default restaurantSlice;
