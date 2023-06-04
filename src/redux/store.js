import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./slices/messagesSlice.js";

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;
