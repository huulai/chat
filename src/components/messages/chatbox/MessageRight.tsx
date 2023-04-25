import { Box } from "@mui/material";
import { Message } from "../../../API";

const MessageRight = ({ message }: { message: Message | null }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        style={{
          backgroundColor: "#b2dfdb",
          padding: "10px",
          borderRadius: "15px",
          margin: "2px 10px",
          maxWidth: "300px",
          wordBreak: "break-word",
        }}
        key={message?.id}
      >
        {message?.text}
      </p>
    </Box>
  );
};

export default MessageRight;
