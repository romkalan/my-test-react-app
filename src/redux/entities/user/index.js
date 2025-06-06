import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: {},
        ids: [],
    },
});

export default userSlice;
