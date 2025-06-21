import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../mock/mock-norm.js";
import getDishesByRestaurantId from "../../thunks/get-dishes.js";

const entityAdapter = createEntityAdapter();

const dishSlice = createSlice({
    name: "dish",
    initialState: {
        entities: normalizedDishes.reduce((acc, dish) => {
            acc[dish.id] = dish;

            return acc;
        }, {}),
        ids: normalizedDishes.map(({id}) => id),
    },
    selectors: {
      selectDishIds: (state, payload) => state.ids,
    },
    extraReducers: builder => builder.addCase(
        getDishesByRestaurantId.fulfilled, (state, {payload}) => {
            entityAdapter(state, payload);
        }
    ),
});

export default dishSlice;
export const {selectDishIds} = dishSlice.selectors;
