import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { GraphQLQuery } from "@aws-amplify/api";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import {
  ListFriendRequestsQuery,
  ListFriendRequestsQueryVariables,
} from "../../../API";
import { listFriendRequests } from "../../../graphql/queries";
import { CognitoUser } from "../../../types";

export const fetchFriendRequests = createAsyncThunk(
  "fetchFriendRequests",
  async (payload: CognitoUser) => {
    console.log("fetchFriendRequests");
    const variables: ListFriendRequestsQueryVariables = {
      filter: {
        or: [
          { friendRequestReceiverId: { eq: payload.attributes.sub } },
          { friendRequestSenderId: { eq: payload.attributes.sub } },
        ],
      },
    };
    const res = await API.graphql<GraphQLQuery<ListFriendRequestsQuery>>({
      query: listFriendRequests,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    return {
      requests: res.data?.listFriendRequests?.items,
    };
  }
);
