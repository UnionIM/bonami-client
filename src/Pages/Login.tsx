import React, { ChangeEvent, useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import PasswordInput from "../Components/UI/PasswordInput";
import { googleLogo } from "../Images/Vector";
import Divider from "../Components/UI/Divider";
import Link from "../Components/UI/Link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const signInHandler = () => {};

  const googleSignInHandler = () => {};

  return (
    <Box p={"60px"}>
      <Card sx={{ width: "415px", padding: "25px" }}>
        <Typography sx={{ mb: "25px" }}>Sign in</Typography>
        <TextField
          sx={{ width: "100%", mb: "20px" }}
          placeholder={"Email"}
          value={email}
          onChange={emailHandler}
        />
        <PasswordInput value={password} setValue={setPassword} />
        <Button
          sx={{ width: "100%", m: "20px 0" }}
          variant={"contained"}
          onClick={signInHandler}
        >
          Sign in
        </Button>
        <Divider text="or" />
        <Button
          sx={{ width: "100%", mt: "20px" }}
          variant={"contained"}
          startIcon={<img src={googleLogo} alt="G" />}
          onClick={googleSignInHandler}
        >
          Sign in with Google
        </Button>
        <Typography textAlign={"center"} mt={"30px"}>
          Don’t have an account? <Link to={"sign-up"}>Sign up</Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Login;
