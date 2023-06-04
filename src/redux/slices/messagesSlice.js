import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    receivedMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const { id, text } = action.payload;
      state.messages.push({ id, text });
    },
    addReceivedMessage: (state, action) => {
      const { id, text } = action.payload;
      state.receivedMessages.push({ id, text });
    },
  },
});

export const { addMessage, addReceivedMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
