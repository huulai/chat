import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxBody from "./ChatBoxBody";
import InputChat from "./InputChat";
import { useAppSelector } from "../../../hooks";
import { useParams } from "react-router-dom";

const ChatBoxContainer = () => {
  const { conversationId } = useParams();
  const conversations = useAppSelector(
    (state) => state.conversation.conversations
  );

  const currentConversation = conversations.find(
    (conversation) => conversation.id === conversationId
  );

  if (!currentConversation) return <></>;

  return (
    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", minHeight:  '100px' }}>
      <ChatBoxHeader conversation={currentConversation} />
      <ChatBoxBody conversation={currentConversation} />
      <InputChat conversation={currentConversation} />
    </div>
  );
};

export default ChatBoxContainer;
