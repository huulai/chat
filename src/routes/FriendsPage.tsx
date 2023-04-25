import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import Friends from "../components/friends/Friends";
import Requests from "../components/friends/Requests";
import AddFriend from "../components/friends/AddFriend";

const FriendsPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <AddFriend />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Friends" value="1" />
              <Tab label="Requests" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Friends />
          </TabPanel>
          <TabPanel value="2">
            <Requests />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default FriendsPage;
