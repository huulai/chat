import { Box } from "@mui/material";
import { Conversation } from "../../../API";
import { useAppSelector } from "../../../hooks";
import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";

const ChatBoxBody = ({ conversation }: { conversation: Conversation }) => {
  const user = useAppSelector((state) => state.user);
  if (!conversation.messages?.items) return <></>;

  return (
    <div
      style={{
        flex: "1 1 auto",
        overflowY: "auto",
        height: "0px",
      }}
    >
      {conversation.messages?.items.map((message) => {
        if (message)
          return message.author?.id === user.sub ? (
            <MessageRight message={message} key={message.id} />
          ) : (
            <MessageLeft message={message} key={message.id} />
          );
      })}
    </div>
  );
};

export default ChatBoxBody;
