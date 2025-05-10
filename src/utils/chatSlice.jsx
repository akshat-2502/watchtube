import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNTER } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNTER, 1);
      state.messages.unshift(action.payload);
      console.log("hello");
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
