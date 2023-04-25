import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../hooks";
import { initUserInfo } from "../store/slices/user/userSlice";
import { CognitoUser } from "../types";
import {
  Message,
  OnCreateFriendRequestSubscription,
  OnCreateFriendSubscription,
  OnCreateMessageSubscription,
  OnCreateMessageSubscriptionVariables,
  OnDeleteFriendRequestSubscription,
  OnDeleteFriendSubscription,
} from "../API";
import * as subscriptions from "../graphql/subscriptions";
import { GraphQLSubscription, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import {
  createRequest,
  deleteRequest,
} from "../store/slices/friendRequest/friendRequestSlice";
import { deleteFriend, createFriend } from "../store/slices/friend/friendSlice";
import { fetchFriendRequests } from "../store/slices/friendRequest/friendRequestThunk";
import { Snackbar } from "@mui/material";
import { fetchFriends } from "../store/slices/friend/friendThunk";
import { fetchConversations } from "../store/slices/conversation/conversationThunk";
import { createdMessage } from "../store/slices/conversation/conversationSlice";

const Root = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user);
  const conversations = useAppSelector(
    (state) => state.conversation.conversations
  );
  const listConversationID = conversations.map(
    (conversation) => conversation.id
  );

  useEffect(() => {
    checkAuthStateAndFetchData();
  }, []);

  useEffect(() => {
    const sub = API.graphql<
      GraphQLSubscription<OnCreateFriendRequestSubscription>
    >({
      query: subscriptions.onCreateFriendRequest,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        if (
          currentUser.sub === value.data?.onCreateFriendRequest?.receiver?.id ||
          currentUser.sub === value.data?.onCreateFriendRequest?.sender?.id
        ) {
          dispatch(createRequest(value.data.onCreateFriendRequest));
        }
        if (
          currentUser.sub === value.data?.onCreateFriendRequest?.receiver?.id
        ) {
          setOpenSnackBar(true);
          setSnackMessage(
            `${value.data.onCreateFriendRequest.sender?.username} sent a friend request`
          );
        }
      },
      error: (error) => console.warn(error),
    });
    return () => {
      sub.unsubscribe();
    };
  });

  useEffect(() => {
    const sub = API.graphql<
      GraphQLSubscription<OnDeleteFriendRequestSubscription>
    >({
      query: subscriptions.onDeleteFriendRequest,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        if (
          currentUser.sub === value.data?.onDeleteFriendRequest?.receiver?.id ||
          currentUser.sub === value.data?.onDeleteFriendRequest?.sender?.id
        ) {
          dispatch(deleteRequest(value.data.onDeleteFriendRequest));
        }
      },
      error: (error) => console.warn(error),
    });
    return () => {
      sub.unsubscribe();
    };
  });

  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<OnCreateFriendSubscription>>({
      query: subscriptions.onCreateFriend,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        if (
          currentUser.sub === value.data?.onCreateFriend?.receiver?.id ||
          currentUser.sub === value.data?.onCreateFriend?.sender?.id
        ) {
          dispatch(createFriend(value.data.onCreateFriend));
        }
        if (currentUser.sub === value.data?.onCreateFriend?.sender?.id) {
          setOpenSnackBar(true);
          setSnackMessage(
            `${value.data.onCreateFriend.receiver?.username} accepted friend request`
          );
        }
      },
      error: (error) => console.warn(error),
    });
    return () => {
      sub.unsubscribe();
    };
  });

  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<OnDeleteFriendSubscription>>({
      query: subscriptions.onDeleteFriend,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        if (
          currentUser.sub === value.data?.onDeleteFriend?.receiver?.id ||
          currentUser.sub === value.data?.onDeleteFriend?.sender?.id
        ) {
          dispatch(deleteFriend(value.data.onDeleteFriend));
        }
      },
      error: (error) => console.warn(error),
    });
    return () => {
      sub.unsubscribe();
    };
  });

  useEffect(() => {
    const variables: OnCreateMessageSubscriptionVariables = {
      filter: {
        conversationID: { in: listConversationID },
      },
    };
    const sub = API.graphql<GraphQLSubscription<OnCreateMessageSubscription>>({
      query: subscriptions.onCreateMessage,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      variables,
    }).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        dispatch(createdMessage(value.data?.onCreateMessage as Message));
      },
      error: (error) => console.warn(error),
    });
    return () => {
      sub.unsubscribe();
    };
  });

  async function checkAuthStateAndFetchData() {
    try {
      const userInfo: CognitoUser = await Auth.currentAuthenticatedUser();
      const {
        attributes: { sub, name, email },
        username,
      } = userInfo;
      dispatch(
        initUserInfo({
          sub,
          name,
          email,
          username,
        })
      );

      dispatch(fetchFriendRequests(userInfo));
      dispatch(fetchFriends(userInfo.attributes.sub));
      dispatch(fetchConversations(userInfo.attributes.sub));
    } catch (error) {
      navigate("/sign-in");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <main style={{ width: "100%" }}>
        <Outlet />
      </main>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackBar}
        onClose={() => setOpenSnackBar(false)}
        message={snackMessage}
      />
    </div>
  );
};

export default Root;
