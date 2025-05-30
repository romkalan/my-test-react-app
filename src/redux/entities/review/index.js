import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../mock/mock-norm.js";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        entities: normalizedReviews.reduce((acc, review) => {
            acc[review.id] = review;

            return acc;
        }, {}),
        ids: normalizedReviews.map(({id}) => id),
    },
});

export default reviewSlice;
