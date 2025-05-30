import {combineSlices, configureStore} from "@reduxjs/toolkit";
import restaurantSlice from "./entities/restaurant/index.js";
import reviewSlice from "./entities/review/index.js";
import userSlice from "./entities/user/index.js";
import dishSlice from "./entities/dishes/index.js";

const store = configureStore({
    reducer: combineSlices(restaurantSlice, reviewSlice, userSlice, dishSlice),
});

console.log(store.getState());

export default store;
