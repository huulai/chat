import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { GraphQLQuery } from "@aws-amplify/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import {
  ListConversationsQuery,
  ListConversationsQueryVariables,
} from "../../../API";
import { listConversations } from "../../../graphql/queries";

export const fetchConversations = createAsyncThunk(
  "fetchConversations",
  (payload: string) => {
    console.log("fetchConversations");
    const variables: ListConversationsQueryVariables = {
      filter: {
        or: [
          { conversationCreatorId: { eq: payload } },
          { conversationRecipientId: { eq: payload } },
        ],
      },
    };
    return API.graphql<GraphQLQuery<ListConversationsQuery>>({
      query: listConversations,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  }
);
