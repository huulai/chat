import { Box, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import {
  CreateFriendMutation,
  CreateFriendMutationVariables,
  DeleteFriendRequestMutation,
  DeleteFriendRequestMutationVariables,
  FriendRequest,
} from "../../API";
import { useAppSelector } from "../../hooks";
import { createFriend, deleteFriendRequest } from "../../graphql/mutations";
import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

const RequestItem = ({ friendRequest }: { friendRequest: FriendRequest }) => {
  const user = useAppSelector((state) => state.user);

  const handleDeleteFriendRequest = async () => {
    try {
      const variables: DeleteFriendRequestMutationVariables = {
        input: {
          id: friendRequest.id,
        },
      };

      await API.graphql<GraphQLQuery<DeleteFriendRequestMutation>>({
        query: deleteFriendRequest,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
    } catch (error) {
      console.log("handleDeleteFriendRequest Error: ", error);
    }
  };

  const handleAcceptFriendRequest = async () => {
    try {
      const variables: CreateFriendMutationVariables = {
        input: {
          friendSenderId: friendRequest.friendRequestSenderId,
          friendReceiverId: friendRequest.friendRequestReceiverId,
        },
      };
      await API.graphql<GraphQLQuery<CreateFriendMutation>>({
        query: createFriend,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      handleDeleteFriendRequest()
    } catch (error) {
      console.log("handleAcceptFriendRequest Error: ", error);
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
      key={`${friendRequest.id}_${Date.now()}`}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <AccountCircleIcon sx={{ width: 40, height: 40 }} />
        <Typography variant="h6" color="initial" sx={{ ml: 2 }}>
          {user.sub === friendRequest.receiver?.id
            ? friendRequest.sender?.username
            : friendRequest.receiver?.username}
        </Typography>
      </div>
      <div>
        {user.sub === friendRequest.receiver?.id ? (
          <IconButton
            color="success"
            aria-label=""
            onClick={() => handleAcceptFriendRequest()}
          >
            <CheckIcon />
          </IconButton>
        ) : (
          ""
        )}
        <IconButton
          color="error"
          aria-label=""
          onClick={() => handleDeleteFriendRequest()}
        >
          <ClearIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default RequestItem;
