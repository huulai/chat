import MessageSearch from "./MessageSearch";
import { Box, Divider, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import MessagesPrivate from "./private/MessagesPrivate";
import MessagesGroup from "./group/MessagesGroup";

const MessagesContainer = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: 300, borderRight: "1px solid #000", height: "100vh" }}>
      <MessageSearch />
      <Divider />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="PRIVATE" value="1" />
              <Tab label="GROUP" value="2" />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: 2 }} value="1">
            <MessagesPrivate />
          </TabPanel>
          <TabPanel sx={{ padding: 2 }} value="2">
            <MessagesGroup />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MessagesContainer;
