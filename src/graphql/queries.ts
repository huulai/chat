/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      author {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      conversationID
      createdAt
      updatedAt
      messageAuthorId
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        author {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        conversationID
        createdAt
        updatedAt
        messageAuthorId
      }
      nextToken
    }
  }
`;
export const messagesByConversationID = /* GraphQL */ `
  query MessagesByConversationID(
    $conversationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByConversationID(
      conversationID: $conversationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        author {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        conversationID
        createdAt
        updatedAt
        messageAuthorId
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      messages {
        items {
          id
          text
          conversationID
          createdAt
          updatedAt
          messageAuthorId
        }
        nextToken
      }
      friend {
        id
        sender {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        receiver {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        friendSenderId
        friendReceiverId
      }
      creator {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      recipient {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      conversationFriendId
      conversationCreatorId
      conversationRecipientId
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messages {
          nextToken
          items {
            id
            text
            messageAuthorId
            author {
              username
              id
            }
          }
        }
        friend {
          id
          createdAt
          updatedAt
          friendSenderId
          friendReceiverId
        }
        creator {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        recipient {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        conversationFriendId
        conversationCreatorId
        conversationRecipientId
      }
      nextToken
    }
  }
`;
export const getFriend = /* GraphQL */ `
  query GetFriend($id: ID!) {
    getFriend(id: $id) {
      id
      sender {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      receiver {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      friendSenderId
      friendReceiverId
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sender {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        receiver {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        friendSenderId
        friendReceiverId
      }
      nextToken
    }
  }
`;
export const getFriendRequest = /* GraphQL */ `
  query GetFriendRequest($id: ID!) {
    getFriendRequest(id: $id) {
      id
      sender {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      status
      receiver {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      friendRequestSenderId
      friendRequestReceiverId
    }
  }
`;
export const listFriendRequests = /* GraphQL */ `
  query ListFriendRequests(
    $filter: ModelFriendRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sender {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        status
        receiver {
          id
          name
          email
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        friendRequestSenderId
        friendRequestReceiverId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      username
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
