import { Box } from "@mui/material";
import { Message } from "../../../API";

const MessageLeft = ({ message }: { message: Message | null }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <p
        style={{
          backgroundColor: "#bbdefb",
          padding: "10px",
          borderRadius: "15px",
          marginLeft: "10px",
          maxWidth: "200px",
          wordBreak: "break-word"
        }}
        key={message?.id}
      >
        {message?.text}
      </p>
    </Box>
  );
};

export default MessageLeft;
