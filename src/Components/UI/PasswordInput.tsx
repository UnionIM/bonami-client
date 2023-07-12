import React, { ChangeEvent, FC } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

interface IPasswordInput {
  margin?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput: FC<IPasswordInput> = ({ margin, value, setValue }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <FormControl sx={{ m: margin || "0", width: "100%" }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-password"
        placeholder={"Password"}
        type={showPassword ? "text" : "password"}
        onChange={handlePassword}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
