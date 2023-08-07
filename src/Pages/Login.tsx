import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  PasswordInput,
  Divider,
  Link,
  Alert as MyAlert,
} from "../Components/UI/index";
import { googleLogo } from "../Images/Vector";
import BonamiController from "../Server/Controller/BonamiController";
import { useDispatch } from "react-redux";
import { IAlert } from "../Models/Bonami";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [inputError, setInputError] = useState<boolean>(false);

  const [alert, setAlert] = useState<IAlert>({
    isOpen: false,
    message: "Error",
    severity: "error",
  });

  const dispatch = useDispatch();

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const signInHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    BonamiController.localLogin(email, password)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({ type: "SET_USER", payload: res.data });
        }
      })
      .catch((e) => {
        if (e.code === "ERR_NETWORK") {
          setAlert({
            isOpen: true,
            message: "Internal Server Error",
            severity: "error",
          });
        }
        if (e.response?.status === 403) {
          setInputError(true);
        }
      });
  };

  const googleSignInHandler = () => {
    window.open(`${process.env.REACT_APP_SERVER_URL}/google`, "_self");
  };

  return (
    <Grid p={"60px"} container justifyContent={"center"}>
      <Card sx={{ width: "415px", padding: "25px" }}>
        <Typography sx={{ mb: "25px" }}>Sign in</Typography>
        <form onSubmit={signInHandler}>
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
            type={"submit"}
          >
            Sign in
          </Button>
        </form>
        {inputError ? (
          <Alert
            severity="error"
            onClose={() => {
              setInputError(false);
            }}
          >
            Wrong email or password
          </Alert>
        ) : (
          <></>
        )}

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
      <MyAlert state={alert} setState={setAlert}></MyAlert>
    </Grid>
  );
};

export default Login;
