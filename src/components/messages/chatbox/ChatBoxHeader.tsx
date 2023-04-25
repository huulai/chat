import React from "react";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Conversation } from "../../../API";
import { useAppSelector } from "../../../hooks";

const ChatBoxHeader = ({ conversation }: { conversation: Conversation }) => {
  const user = useAppSelector((state) => state.user);
  return (
    <div>
      <Typography sx={{ padding: "20px" }} variant="h6" color="initial">
        {conversation.creator?.id !== user.sub
          ? conversation.creator?.username
          : conversation.recipient?.username}
      </Typography>
      <Divider />
    </div>
  );
};

export default ChatBoxHeader;
