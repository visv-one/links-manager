import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
};

export const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTags: (state, action) => {
            const isTagExist = state.value.filter(tag => tag.id === action.payload.id);
            if (isTagExist.length) return;
            state.value.push(action.payload);
        }
    }
});

export const { addTags } = tagsSlice.actions;

export default tagsSlice.reducer;