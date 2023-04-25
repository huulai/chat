import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Friend } from "../../../API";
import { fetchFriends } from "./friendThunk";

export const friendSlice = createSlice({
  name: "friend",
  initialState: {
    friends: [] as Friend[],
  },
  reducers: {
    createFriend: (state, action: PayloadAction<Friend>) => {
      state.friends.push(action.payload);
    },
    deleteFriend: (state, action: PayloadAction<Friend>) => {
      const idx = state.friends.findIndex(
        (friend) => friend.id === action.payload.id
      );
      if (idx > -1) state.friends.splice(idx, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      console.log("fetchFriends.fulfilled");
      state.friends = action.payload.data?.listFriends?.items as Friend[];
    });
  },
});

export const { deleteFriend, createFriend } = friendSlice.actions;

export default friendSlice.reducer;
