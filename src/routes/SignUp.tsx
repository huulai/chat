import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const theme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isConfirmationStep, setIsConfirmationStep] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUp();
  };

  const handleConfirmSignup = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(username, code);
      navigate("/sign-in");
      console.log("code resent successfully");
    } catch (err) {
      // @ts-ignore
      setError(JSON.stringify(error.message));
      console.log("error resending code: ", err);
    }
  };

  async function signUp() {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          name,
          email,
        },
      });
      setIsConfirmationStep(true);
      setError("")
    } catch (error) {
      // @ts-ignore
      setError(JSON.stringify(error.message));
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/intro.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {!isConfirmationStep ? (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1, width: "80%" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      name="nickname"
                      required
                      fullWidth
                      id="nickname"
                      label="nickname"
                      autoFocus
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </Grid> */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Username"
                      label="Username"
                      name="Username"
                      autoComplete="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    {!!error && (
                      <Typography variant="body1" color="red">
                        {error}
                      </Typography>
                    )}
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/sign-in" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box
                component="form"
                noValidate
                onSubmit={handleConfirmSignup}
                sx={{ mt: 1, width: "80%" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="initial">
                      Please check your mail
                    </Typography>
                    <Typography variant="body2" color="initial">
                      We've sent a code to {email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="confirmation code"
                      required
                      fullWidth
                      id="confirmation code"
                      label="Confirmation code"
                      autoFocus
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    Didn't get a code?
                    <Button variant="text" color="primary">
                      resend
                    </Button>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    {!!error && (
                      <Typography variant="body1" color="red">
                        {error}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained">
                      Confirm
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
