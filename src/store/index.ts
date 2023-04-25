import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import friendRequestReducer from "./slices/friendRequest/friendRequestSlice";
import FriendReducer from "./slices/friend/friendSlice";
import conversationReducer from "./slices/conversation/conversationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    friendRequest: friendRequestReducer,
    friend: FriendReducer,
    conversation: conversationReducer,
  },
  middleware: (getDefaulMiddleware) => {
    return getDefaulMiddleware({ serializableCheck: false });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
