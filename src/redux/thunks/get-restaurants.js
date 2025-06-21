import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRastaurant} from "../entities/restaurants/selectors.js";

const getRestaurants = createAsyncThunk(
    "restaurants/getRestaurants",
    async () => {
        const response = await fetch("http://localhost3001/api/restaurants");
        const result = await response.json();
        return result;
    },
    {condition: (_, {getState}) => {
        return !selectRastaurant(getState)?.length
    }}
);

export default getRestaurants;
