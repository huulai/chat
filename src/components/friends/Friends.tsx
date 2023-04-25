import { useAppSelector } from "../../hooks";
import FriendItem from "./FriendItem";
import { Stack } from "@mui/material";

const Friends = () => {
  const friends = useAppSelector((state) => state.friend.friends);
  return (
    <Stack>
      {friends.map((friend) => (
        <FriendItem friend={friend} key={`${friend.id}_${Date.now()}`} />
      ))}
    </Stack>
  );
};

export default Friends;
