import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { GraphQLQuery } from "@aws-amplify/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import { ListFriendsQuery, ListFriendsQueryVariables } from "../../../API";
import { listFriends } from "../../../graphql/queries";

export const fetchFriends = createAsyncThunk(
  "fetchFriends",
  (payload: string) => {
    console.log("fetchFriends");
    const variables: ListFriendsQueryVariables = {
      filter: {
        or: [
          { friendReceiverId: { eq: payload } },
          { friendSenderId: { eq: payload } },
        ],
      },
    };
    return API.graphql<GraphQLQuery<ListFriendsQuery>>({
      query: listFriends,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  }
);
