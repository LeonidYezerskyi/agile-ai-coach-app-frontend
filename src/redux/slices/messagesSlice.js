import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const { id, text } = action.payload;
      state.push({ id, text });
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
