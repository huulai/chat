import { Box, IconButton, Link } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  async function signOut() {
    try {
      await Auth.signOut();
      navigate('/sign-in')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  
  return (
    <Box
      sx={{
        width: 80,
        borderRight: "1px solid #000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <IconButton
          sx={{
            margin: "auto",
            display: "block",
            width: "100%",
            "&:hover": {
              background: "#eeeeee",
            },
          }}
        >
          <AccountCircleIcon sx={{ width: 60, height: 60 }} />
        </IconButton>
        <Link href="/messages">
          <IconButton
            sx={{
              margin: "auto",
              display: "block",
              width: "100%",
              "&:hover": {
                background: "#eeeeee",
              },
              borderRadius: 0,
            }}
          >
            <MessageIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
        </Link>
        <Link href="/friends">
          <IconButton
            sx={{
              margin: "auto",
              display: "block",
              width: "100%",
              "&:hover": {
                background: "#eeeeee",
              },
              borderRadius: 0,
            }}
          >
            <PeopleAltIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
        </Link>
        <Link href="/settings">
          <IconButton
            sx={{
              margin: "auto",
              display: "block",
              width: "100%",
              "&:hover": {
                background: "#eeeeee",
              },
              borderRadius: 0,
            }}
          >
            <SettingsIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
        </Link>
      </div>
      <div>
        <IconButton
          sx={{
            margin: "auto",
            display: "block",
            width: "100%",
            "&:hover": {
              background: "#eeeeee",
            },
            borderRadius: 0,
          }}
          onClick={() => signOut()}
        >
          <LogoutIcon sx={{ width: 30, height: 30 }} />
        </IconButton>
      </div>
    </Box>
  );
};

export default SideBar;
