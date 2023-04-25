import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const MessageSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
      <TextField
        size="small"
        id="search"
        label="Search for Conversations"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton aria-label="" onClick={() => {}}>
        <SearchIcon sx={{ width: 35, height: 35, ml: 1 }} />
      </IconButton>
    </div>
  );
};

export default MessageSearch;
