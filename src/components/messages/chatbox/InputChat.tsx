import { Box, IconButton, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  Conversation,
  CreateMessageMutation,
  CreateMessageMutationVariables,
} from "../../../API";
import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { createMessage } from "../../../graphql/mutations";
import { useState } from "react";
import { useAppSelector } from "../../../hooks";

const InputChat = ({ conversation }: { conversation: Conversation }) => {
  const [message, setMessage] = useState("");
  const user = useAppSelector((state) => state.user);

  const sendMessage = async () => {
    try {
      const variables: CreateMessageMutationVariables = {
        input: {
          text: message,
          conversationID: conversation.id,
          messageAuthorId: user.sub,
        },
      };
      await API.graphql<GraphQLQuery<CreateMessageMutation>>({
        query: createMessage,
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      setMessage("");
    } catch (error) {
      console.log("sendMessage Error: ", error);
    }
  };

  const handleEnterInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Box
      sx={{
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <TextareaAutosize
        minRows={2}
        maxRows={4}
        style={{ width: "90%", padding: 5 }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnterInput}
      />

      <IconButton onClick={() => sendMessage()}>
        <SendIcon sx={{ width: 50, height: 50 }} />
      </IconButton>
    </Box>
  );
};

export default InputChat;
