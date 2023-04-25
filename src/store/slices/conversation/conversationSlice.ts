import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchConversations } from "./conversationThunk";
import { Conversation, Message } from "../../../API";

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    conversations: [] as Conversation[],
  },
  reducers: {
    createdMessage: (state, action: PayloadAction<Message>) => {
      console.log(action);
      const idx = state.conversations.findIndex(
        (conversation) => conversation.id === action.payload.conversationID
      );
      if (idx > -1)
        state.conversations[idx].messages?.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConversations.fulfilled, (state, action) => {
      console.log("fetchConversations.fulfilled");
      state.conversations = action.payload.data?.listConversations
        ?.items as Conversation[];
    });
  },
});

export const { createdMessage } = conversationSlice.actions;

export default conversationSlice.reducer;
