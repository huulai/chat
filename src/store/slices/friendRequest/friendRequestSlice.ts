import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FriendRequest } from "../../../API";
import { fetchFriendRequests } from "./friendRequestThunk";

export const friendRequest = createSlice({
  name: "friendRequest",
  initialState: {
    requests: [] as FriendRequest[],
  },
  reducers: {
    createRequest: (state, action: PayloadAction<FriendRequest>) => {
      state.requests.push(action.payload);
    },
    deleteRequest: (state, action: PayloadAction<FriendRequest>) => {
      const idxRequest = state.requests.findIndex(
        (request) => request.id === action.payload.id
      );
      if (idxRequest > -1) state.requests.splice(idxRequest, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFriendRequests.fulfilled, (state, action) => {
      console.log("fetchFriendRequests.fulfilled");
      state.requests = action.payload.requests as FriendRequest[];
    });
  },
});

export const { createRequest, deleteRequest } = friendRequest.actions;

export default friendRequest.reducer;
