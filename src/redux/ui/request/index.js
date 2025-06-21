import {createSlice} from "@reduxjs/toolkit";

const REQUEST_STATUS = {
    pending: 'pending',
    success: 'success',
    fail: 'fail',
    idle: 'idle'
};

const requestSlice = createSlice({
    name: "requestModule",
    initialState: {},
    selectors: {
        selectStatus: (state, id) => state[id] || REQUEST_STATUS.idle,
    },
    extraReducers: builder => builder
        .addMatcher(
            ({type}) => type.endsWith("/pending"),
            (state, {meta}) => {
                state[meta.requestId] = REQUEST_STATUS.pending;
            }
        )
        .addMatcher(
            ({type}) => type.endsWith("/fulfilled"),
            (state, {meta}) => {
                state[meta.requestId] = REQUEST_STATUS.success;
            }
        )
        .addMatcher(
            ({type}) => type.endsWith("/rejected"),
            (state, {meta}) => {
                state[meta.requestId] = REQUEST_STATUS.fail;
            }
        )
});

export const {selectStatus} = requestSlice.selectors;

export default requestSlice;
