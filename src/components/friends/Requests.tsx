import { Stack } from "@mui/material";
import RequestItem from "./RequestItem";
import { useAppSelector } from "../../hooks";

const Requests = () => {
  const friendRequests = useAppSelector(
    (state) => state.friendRequest.requests
  );
  return (
    <Stack>
      {friendRequests.map((friendRequest) => (
        <RequestItem
          friendRequest={friendRequest}
          key={`${friendRequest.id}_${Date.now()}`}
        />
      ))}
    </Stack>
  );
};

export default Requests;
