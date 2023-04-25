import { useAppSelector } from "../../../hooks";
import MessagePrivateItem from "./MessagePrivateItem";
import { Stack } from "@mui/material";

const MessagesPrivate = () => {
  const { conversations } = useAppSelector((state) => state.conversation);
  return (
    <Stack>
      {conversations.map((conversation) => (
        <MessagePrivateItem conversation={conversation} key={conversation.id} />
      ))}
    </Stack>
  );
};

export default MessagesPrivate;
