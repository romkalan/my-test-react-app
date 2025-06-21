import {combineSlices, configureStore} from "@reduxjs/toolkit";
import restaurantSlice from "./entities/restaurants/index.js";
import reviewSlice from "./entities/review/index.js";
import userSlice from "./entities/user/index.js";
import dishSlice from "./entities/dishes/index.js";
import cartSlice from "./ui/cart/index.js";
import requestSlice from "./ui/request/index.js";
import api from "./services/api.js";

const store = configureStore({
    reducer: combineSlices(cartSlice, restaurantSlice, reviewSlice, userSlice, dishSlice, requestSlice, api),
});

console.log(store.getState());

export default store;
