import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        increment: (state, {payload: productId}) => {
            state[productId] = (state[productId] || 0) + 1;
        },
        decrement: (state, {payload: productId}) => {
            state[productId] = (state[productId] || 0) - 1;

            if (state[productId] <= 0) {
                delete state[productId];
            }
        },
    },
    selectors: {
        selectProductAmountById: (state, productId) => {
            return state[productId] || 0;
        },
        selectProductAmount: (state) => {
            return Object.values(state).reduce((acc, amount) => {
                return acc + amount;
            }, 0);
        },
        selectCartProductIds: (state) => Object.keys(state),
    }
});

export default cartSlice;
export const { selectProductAmountById, selectProductAmount, selectCartProductIds} = cartSlice.selectors;
export const cartActions = cartSlice.actions;
