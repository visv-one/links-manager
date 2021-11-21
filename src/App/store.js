import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../Features/topicSlice";
import tagsReducer from "../Features/tagsSlice";
import primaryTopicsReducer from "../Features/primaryTopicsSlice";

export const store = configureStore({
    reducer: {
        primaryTopics: primaryTopicsReducer,
        topic: topicReducer,
        tags: tagsReducer
    }
});
