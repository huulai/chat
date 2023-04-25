import { Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ClearIcon from "@mui/icons-material/Clear";
import {
  CreateConversationMutation,
  CreateConversationMutationVariables,
  DeleteFriendMutation,
  DeleteFriendMutationVariables,
  Friend,
} from "../../API";
import { useAppSelector } from "../../hooks";
import MessageIcon from "@mui/icons-material/Message";
import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { createConversation, deleteFriend } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";

const FriendItem = ({ friend }: { friend: Friend }) => {
  const user = useAppSelector((state) => state.user);
  const conversation = useAppSelector((state) => state.conversation);
  const navigate = useNavigate();

  const handleRemoveFriend = async () => {
    try {
      const variables: DeleteFriendMutationVariables = {
        input: {
          id: friend.id,
        },
      };
      await API.graphql<GraphQLQuery<DeleteFriendMutation>>({
        query: deleteFriend,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
    } catch (error) {
      console.log("handleRemoveFriend Error: ", error);
    }
  };

  const handleNavigateToConversation = () => {
    const idx = conversation.conversations.findIndex(
      (conversation) => conversation.friend?.id === friend.id
    );
    idx > -1
      ? navigate(`/messages/${conversation.conversations[idx].id}`)
      : handleCreateConversation();
  };

  const handleCreateConversation = async () => {
    try {
      const variables: CreateConversationMutationVariables = {
        input: {
          conversationFriendId: friend.id,
          conversationCreatorId: friend.friendSenderId,
          conversationRecipientId: friend.friendReceiverId
        },
      };
      const result = await API.graphql<
        GraphQLQuery<CreateConversationMutation>
      >({
        query: createConversation,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      navigate(`/messages/${result.data?.createConversation?.id}`);
    } catch (error) {
      console.log("handleCreateConversation Error: ", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 1,
        p: 2,
        bgcolor: "#eeeeee",
        borderRadius: 10,
        "&:hover": {
          background: "#e0e0e0",
        },
      }}
      key={`${friend.id}_${Date.now()}`}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <AccountCircleIcon sx={{ width: 40, height: 40 }} />
        <Typography variant="h6" color="initial" sx={{ ml: 2 }}>
          {user.sub === friend.receiver?.id
            ? friend.sender?.username
            : friend.receiver?.username}
        </Typography>
      </div>
      <div>
        <IconButton
          aria-label=""
          onClick={() => handleNavigateToConversation()}
        >
          <MessageIcon color="primary" />
        </IconButton>
        <IconButton aria-label="" onClick={() => handleRemoveFriend()}>
          <ClearIcon color="error" />
        </IconButton>
      </div>
    </Box>
  );
};

export default FriendItem;
