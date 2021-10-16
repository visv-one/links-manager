import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../Features/topicSlice";
import tagsReducer from "../Features/tagsSlice";

export const store = configureStore({
    reducer: {
        topic: topicReducer,
        tags: tagsReducer
    }
});
