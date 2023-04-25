/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
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
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend($filter: ModelSubscriptionFriendFilterInput) {
    onCreateFriend(filter: $filter) {
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
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend($filter: ModelSubscriptionFriendFilterInput) {
    onUpdateFriend(filter: $filter) {
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
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend($filter: ModelSubscriptionFriendFilterInput) {
    onDeleteFriend(filter: $filter) {
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
export const onCreateFriendRequest = /* GraphQL */ `
  subscription OnCreateFriendRequest(
    $filter: ModelSubscriptionFriendRequestFilterInput
  ) {
    onCreateFriendRequest(filter: $filter) {
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
export const onUpdateFriendRequest = /* GraphQL */ `
  subscription OnUpdateFriendRequest(
    $filter: ModelSubscriptionFriendRequestFilterInput
  ) {
    onUpdateFriendRequest(filter: $filter) {
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
export const onDeleteFriendRequest = /* GraphQL */ `
  subscription OnDeleteFriendRequest(
    $filter: ModelSubscriptionFriendRequestFilterInput
  ) {
    onDeleteFriendRequest(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      email
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      email
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      email
      username
      createdAt
      updatedAt
    }
  }
`;
