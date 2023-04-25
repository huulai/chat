/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  id?: string | null,
  text?: string | null,
  conversationID: string,
  messageAuthorId?: string | null,
};

export type ModelMessageConditionInput = {
  text?: ModelStringInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  messageAuthorId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  text?: string | null,
  author?: User | null,
  conversationID: string,
  createdAt: string,
  updatedAt: string,
  messageAuthorId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email?: string | null,
  username?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  text?: string | null,
  conversationID?: string | null,
  messageAuthorId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateConversationInput = {
  id?: string | null,
  conversationFriendId?: string | null,
  conversationCreatorId?: string | null,
  conversationRecipientId?: string | null,
};

export type ModelConversationConditionInput = {
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
  conversationFriendId?: ModelIDInput | null,
  conversationCreatorId?: ModelIDInput | null,
  conversationRecipientId?: ModelIDInput | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  messages?: ModelMessageConnection | null,
  friend?: Friend | null,
  creator?: User | null,
  recipient?: User | null,
  createdAt: string,
  updatedAt: string,
  conversationFriendId?: string | null,
  conversationCreatorId?: string | null,
  conversationRecipientId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Friend = {
  __typename: "Friend",
  id: string,
  sender?: User | null,
  receiver?: User | null,
  createdAt: string,
  updatedAt: string,
  friendSenderId?: string | null,
  friendReceiverId?: string | null,
};

export type UpdateConversationInput = {
  id: string,
  conversationFriendId?: string | null,
  conversationCreatorId?: string | null,
  conversationRecipientId?: string | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type CreateFriendInput = {
  id?: string | null,
  friendSenderId?: string | null,
  friendReceiverId?: string | null,
};

export type ModelFriendConditionInput = {
  and?: Array< ModelFriendConditionInput | null > | null,
  or?: Array< ModelFriendConditionInput | null > | null,
  not?: ModelFriendConditionInput | null,
  friendSenderId?: ModelIDInput | null,
  friendReceiverId?: ModelIDInput | null,
};

export type UpdateFriendInput = {
  id: string,
  friendSenderId?: string | null,
  friendReceiverId?: string | null,
};

export type DeleteFriendInput = {
  id: string,
};

export type CreateFriendRequestInput = {
  id?: string | null,
  status?: FriendRequestStatus | null,
  friendRequestSenderId?: string | null,
  friendRequestReceiverId?: string | null,
};

export enum FriendRequestStatus {
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}


export type ModelFriendRequestConditionInput = {
  status?: ModelFriendRequestStatusInput | null,
  and?: Array< ModelFriendRequestConditionInput | null > | null,
  or?: Array< ModelFriendRequestConditionInput | null > | null,
  not?: ModelFriendRequestConditionInput | null,
  friendRequestSenderId?: ModelIDInput | null,
  friendRequestReceiverId?: ModelIDInput | null,
};

export type ModelFriendRequestStatusInput = {
  eq?: FriendRequestStatus | null,
  ne?: FriendRequestStatus | null,
};

export type FriendRequest = {
  __typename: "FriendRequest",
  id: string,
  sender?: User | null,
  status?: FriendRequestStatus | null,
  receiver?: User | null,
  createdAt: string,
  updatedAt: string,
  friendRequestSenderId?: string | null,
  friendRequestReceiverId?: string | null,
};

export type UpdateFriendRequestInput = {
  id: string,
  status?: FriendRequestStatus | null,
  friendRequestSenderId?: string | null,
  friendRequestReceiverId?: string | null,
};

export type DeleteFriendRequestInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  username?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  messageAuthorId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
  conversationFriendId?: ModelIDInput | null,
  conversationCreatorId?: ModelIDInput | null,
  conversationRecipientId?: ModelIDInput | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type ModelFriendFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelFriendFilterInput | null > | null,
  or?: Array< ModelFriendFilterInput | null > | null,
  not?: ModelFriendFilterInput | null,
  friendSenderId?: ModelIDInput | null,
  friendReceiverId?: ModelIDInput | null,
};

export type ModelFriendConnection = {
  __typename: "ModelFriendConnection",
  items:  Array<Friend | null >,
  nextToken?: string | null,
};

export type ModelFriendRequestFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelFriendRequestStatusInput | null,
  and?: Array< ModelFriendRequestFilterInput | null > | null,
  or?: Array< ModelFriendRequestFilterInput | null > | null,
  not?: ModelFriendRequestFilterInput | null,
  friendRequestSenderId?: ModelIDInput | null,
  friendRequestReceiverId?: ModelIDInput | null,
};

export type ModelFriendRequestConnection = {
  __typename: "ModelFriendRequestConnection",
  items:  Array<FriendRequest | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  conversationID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionConversationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationFilterInput | null > | null,
};

export type ModelSubscriptionFriendFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFriendFilterInput | null > | null,
  or?: Array< ModelSubscriptionFriendFilterInput | null > | null,
};

export type ModelSubscriptionFriendRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    messageAuthorId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    messageAuthorId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    messageAuthorId?: string | null,
  } | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    friend?:  {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null,
    creator?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipient?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationFriendId?: string | null,
    conversationCreatorId?: string | null,
    conversationRecipientId?: string | null,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    friend?:  {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null,
    creator?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipient?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationFriendId?: string | null,
    conversationCreatorId?: string | null,
    conversationRecipientId?: string | null,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    friend?:  {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null,
    creator?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipient?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationFriendId?: string | null,
    conversationCreatorId?: string | null,
    conversationRecipientId?: string | null,
  } | null,
};

export type CreateFriendMutationVariables = {
  input: CreateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type CreateFriendMutation = {
  createFriend?:  {
    __typename: "Friend",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendSenderId?: string | null,
    friendReceiverId?: string | null,
  } | null,
};

export type UpdateFriendMutationVariables = {
  input: UpdateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type UpdateFriendMutation = {
  updateFriend?:  {
    __typename: "Friend",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendSenderId?: string | null,
    friendReceiverId?: string | null,
  } | null,
};

export type DeleteFriendMutationVariables = {
  input: DeleteFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type DeleteFriendMutation = {
  deleteFriend?:  {
    __typename: "Friend",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendSenderId?: string | null,
    friendReceiverId?: string | null,
  } | null,
};

export type CreateFriendRequestMutationVariables = {
  input: CreateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type CreateFriendRequestMutation = {
  createFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status?: FriendRequestStatus | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendRequestSenderId?: string | null,
    friendRequestReceiverId?: string | null,
  } | null,
};

export type UpdateFriendRequestMutationVariables = {
  input: UpdateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type UpdateFriendRequestMutation = {
  updateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status?: FriendRequestStatus | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendRequestSenderId?: string | null,
    friendRequestReceiverId?: string | null,
  } | null,
};

export type DeleteFriendRequestMutationVariables = {
  input: DeleteFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type DeleteFriendRequestMutation = {
  deleteFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status?: FriendRequestStatus | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendRequestSenderId?: string | null,
    friendRequestReceiverId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    messageAuthorId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      author?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationID: string,
      createdAt: string,
      updatedAt: string,
      messageAuthorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByConversationIDQueryVariables = {
  conversationID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByConversationIDQuery = {
  messagesByConversationID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      author?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationID: string,
      createdAt: string,
      updatedAt: string,
      messageAuthorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    friend?:  {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null,
    creator?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipient?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationFriendId?: string | null,
    conversationCreatorId?: string | null,
    conversationRecipientId?: string | null,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      friend?:  {
        __typename: "Friend",
        id: string,
        createdAt: string,
        updatedAt: string,
        friendSenderId?: string | null,
        friendReceiverId?: string | null,
      } | null,
      creator?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      recipient?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      conversationFriendId?: string | null,
      conversationCreatorId?: string | null,
      conversationRecipientId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFriendQueryVariables = {
  id: string,
};

export type GetFriendQuery = {
  getFriend?:  {
    __typename: "Friend",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendSenderId?: string | null,
    friendReceiverId?: string | null,
  } | null,
};

export type ListFriendsQueryVariables = {
  filter?: ModelFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendsQuery = {
  listFriends?:  {
    __typename: "ModelFriendConnection",
    items:  Array< {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFriendRequestQueryVariables = {
  id: string,
};

export type GetFriendRequestQuery = {
  getFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status?: FriendRequestStatus | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendRequestSenderId?: string | null,
    friendRequestReceiverId?: string | null,
  } | null,
};

export type ListFriendRequestsQueryVariables = {
  filter?: ModelFriendRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendRequestsQuery = {
  listFriendRequests?:  {
    __typename: "ModelFriendRequestConnection",
    items:  Array< {
      __typename: "FriendRequest",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      status?: FriendRequestStatus | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendRequestSenderId?: string | null,
      friendRequestReceiverId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    messageAuthorId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    messageAuthorId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    messageAuthorId?: string | null,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    friend?:  {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null,
    creator?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipient?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationFriendId?: string | null,
    conversationCreatorId?: string | null,
    conversationRecipientId?: string | null,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    friend?:  {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null,
    creator?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipient?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationFriendId?: string | null,
    conversationCreatorId?: string | null,
    conversationRecipientId?: string | null,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    friend?:  {
      __typename: "Friend",
      id: string,
      sender?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        username?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      friendSenderId?: string | null,
      friendReceiverId?: string | null,
    } | null,
    creator?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipient?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationFriendId?: string | null,
    conversationCreatorId?: string | null,
    conversationRecipientId?: string | null,
  } | null,
};

export type OnCreateFriendSubscriptionVariables = {
  filter?: ModelSubscriptionFriendFilterInput | null,
};

export type OnCreateFriendSubscription = {
  onCreateFriend?:  {
    __typename: "Friend",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendSenderId?: string | null,
    friendReceiverId?: string | null,
  } | null,
};

export type OnUpdateFriendSubscriptionVariables = {
  filter?: ModelSubscriptionFriendFilterInput | null,
};

export type OnUpdateFriendSubscription = {
  onUpdateFriend?:  {
    __typename: "Friend",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendSenderId?: string | null,
    friendReceiverId?: string | null,
  } | null,
};

export type OnDeleteFriendSubscriptionVariables = {
  filter?: ModelSubscriptionFriendFilterInput | null,
};

export type OnDeleteFriendSubscription = {
  onDeleteFriend?:  {
    __typename: "Friend",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendSenderId?: string | null,
    friendReceiverId?: string | null,
  } | null,
};

export type OnCreateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnCreateFriendRequestSubscription = {
  onCreateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status?: FriendRequestStatus | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendRequestSenderId?: string | null,
    friendRequestReceiverId?: string | null,
  } | null,
};

export type OnUpdateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnUpdateFriendRequestSubscription = {
  onUpdateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status?: FriendRequestStatus | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendRequestSenderId?: string | null,
    friendRequestReceiverId?: string | null,
  } | null,
};

export type OnDeleteFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnDeleteFriendRequestSubscription = {
  onDeleteFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status?: FriendRequestStatus | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    friendRequestSenderId?: string | null,
    friendRequestReceiverId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
