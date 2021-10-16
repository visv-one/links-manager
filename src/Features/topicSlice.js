import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        id: '',
        name: ''
    }
};

export const topicSlice = createSlice({
    name: "topic",
    initialState,
    reducers: {
        addTopic: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addTopic } = topicSlice.actions

export default topicSlice.reducer;