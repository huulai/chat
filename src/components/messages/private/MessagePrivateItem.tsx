import { Grid, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Conversation } from "../../../API";
import { useAppSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";

const MessagePrivateItem = ({
  conversation,
}: {
  conversation: Conversation;
}) => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/messages/${conversation.id}`)}>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 0.5,
          mb: 0.5,
          padding: 1,
          borderRadius: 5,
          cursor: "pointer",
          "&:hover": {
            background: "#eeeeee",
          },
        }}
      >
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
          <AccountCircleIcon sx={{ width: 40, height: 40 }} />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h6" color="initial" sx={{ fontSize: "16px" }}>
            {conversation.creator?.id !== user.sub
              ? conversation.creator?.username
              : conversation.recipient?.username}
          </Typography>
          <Typography variant="body1" color="initial" sx={{ fontSize: "14px" }}>
            {/* {conversation.messages?.items.slice(-1)} */}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default MessagePrivateItem;
