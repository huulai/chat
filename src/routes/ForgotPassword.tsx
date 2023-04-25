import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function ForgotPassword() {
  const [isSubmitedUsername, setIsSubmitedUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await Auth.forgotPassword(username);
      setError("");
      setIsSubmitedUsername(true);
    } catch (error) {
      // @ts-ignore
      setError(JSON.stringify(error.message));
      console.log("error signing in", error);
    }
  };
  const handleChangePassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      setError("");
      navigate("/sign-in");
    } catch (error) {
      // @ts-ignore
      setError(JSON.stringify(error.message));
      console.log("error signing in", error);
    }
  };

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
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            {!isSubmitedUsername ? (
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
                {!!error && (
                  <Typography variant="body1" color="red">
                    {error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  submit
                </Button>
              </Box>
            ) : (
              <Box
                component="form"
                onSubmit={handleChangePassword}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="code"
                  name="code"
                  autoComplete="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="new password"
                  name="password"
                  autoComplete="password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setnewPassword(e.target.value)}
                  autoFocus
                />
                {!!error && (
                  <Typography variant="body1" color="red">
                    {error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  submit
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
