import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initUserInfoInput } from "../../../types";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    sub: "",
    name: "",
    email: "",
    username: "",
  },
  reducers: {
    initUserInfo: (state, action: PayloadAction<initUserInfoInput>) => {
      const { sub, name, email, username } = action.payload;
      state.sub = sub;
      state.name = name;
      state.email = email;
      state.username = username;
    },
  },
  extraReducers: (builder) => {},
});

export const { initUserInfo } = userSlice.actions;

export default userSlice.reducer;
