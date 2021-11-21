import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
};

export const primaryTopicsSlice = createSlice({
    name: "primaryTopics",
    initialState,
    reducers: {
        setPrimaryTopic: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setPrimaryTopic } = primaryTopicsSlice.actions;

export default primaryTopicsSlice.reducer;