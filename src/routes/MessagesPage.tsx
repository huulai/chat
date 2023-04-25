import React from "react";
import MessagesContainer from "../components/messages/MessagesContainer";
import ChatBoxContainer from "../components/messages/chatbox/ChatBoxContainer";
import { useParams } from "react-router-dom";

const MessagesPage = () => {
  const { conversationId } = useParams();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <MessagesContainer />
      {conversationId && <ChatBoxContainer />}
    </div>
  );
};

export default MessagesPage;
