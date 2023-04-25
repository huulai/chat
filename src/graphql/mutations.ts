/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createFriend = /* GraphQL */ `
  mutation CreateFriend(
    $input: CreateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    createFriend(input: $input, condition: $condition) {
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
export const updateFriend = /* GraphQL */ `
  mutation UpdateFriend(
    $input: UpdateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    updateFriend(input: $input, condition: $condition) {
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
export const deleteFriend = /* GraphQL */ `
  mutation DeleteFriend(
    $input: DeleteFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    deleteFriend(input: $input, condition: $condition) {
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
export const createFriendRequest = /* GraphQL */ `
  mutation CreateFriendRequest(
    $input: CreateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    createFriendRequest(input: $input, condition: $condition) {
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
export const updateFriendRequest = /* GraphQL */ `
  mutation UpdateFriendRequest(
    $input: UpdateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    updateFriendRequest(input: $input, condition: $condition) {
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
export const deleteFriendRequest = /* GraphQL */ `
  mutation DeleteFriendRequest(
    $input: DeleteFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    deleteFriendRequest(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      createdAt
      updatedAt
    }
  }
`;
