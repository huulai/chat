import { useState } from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import IconButton from "@mui/material/IconButton";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import {
  CreateFriendRequestMutation,
  CreateFriendRequestMutationVariables,
  FriendRequestStatus,
  ListUsersQuery,
  ListUsersQueryVariables,
} from "../../API";
import { listUsers } from "../../graphql/queries";
import { createFriendRequest } from "../../graphql/mutations";
import { useAppSelector } from "../../hooks";

const AddFriend = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const user = useAppSelector((state) => state.user);
  const friendRequest = useAppSelector((state) => state.friendRequest);

  const submitSendRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await findUser();
    if (user) handleCreateFriendRequest(user.id);
  };

  const handleCreateFriendRequest = async (receiverId: string) => {
    console.log("handleCreateFriendRequest");
    const variables: CreateFriendRequestMutationVariables = {
      input: {
        status: FriendRequestStatus.PENDING,
        friendRequestSenderId: user.sub,
        friendRequestReceiverId: receiverId,
      },
    };

    const res = await API.graphql<GraphQLQuery<CreateFriendRequestMutation>>({
      query: createFriendRequest,
      variables: variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    console.log({ res });
  };

  const findUser = async () => {
    if (username === user.username) {
      setError("can't add yourself");
      return false;
    }

    // if (friendRequest.listUsernamePendingRequest.includes(username)) {
    //   setError("request is sent");
    //   return false;
    // }

    setError("");

    try {
      const variables: ListUsersQueryVariables = {
        filter: {
          username: { eq: username },
        },
      };

      const res = await API.graphql<GraphQLQuery<ListUsersQuery>>({
        query: listUsers,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      if (res.data?.listUsers?.items.length === 0) {
        setError("user not found");
        return false;
      }
      setIsOpenDialog(false);
      return res.data?.listUsers?.items[0];
    } catch (error) {
      console.log("FindUser Error: ", error);
      return false;
    }
  };

  return (
    <div style={{ float: "right" }}>
      <IconButton aria-label="" onClick={() => setIsOpenDialog(true)}>
        <PersonAddAlt1Icon color="primary" sx={{ width: 40, height: 40 }} />
      </IconButton>
      <Dialog
        onClose={() => {
          setIsOpenDialog(false);
        }}
        open={isOpenDialog}
      >
        <DialogTitle>Add Friend</DialogTitle>
        <DialogContent sx={{ width: 300 }}>
          <Box component="form" onSubmit={submitSendRequest}>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="username"
              type="username"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="standard"
            />
            {!!error && (
              <Typography variant="body1" color="red">
                {error}
              </Typography>
            )}
            <div style={{ marginTop: 20, textAlign: "right" }}>
              <Button color="error" onClick={() => setIsOpenDialog(false)}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Send Request
              </Button>
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddFriend;
