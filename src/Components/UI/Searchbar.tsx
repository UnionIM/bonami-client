import React, { ChangeEvent, FC } from "react";
import { InputAdornment, styled, TextField } from "@mui/material";
import { magnifier } from "../../Images/Vector";

interface ISearchbar {
  maxWidth: number;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchbarInput = styled(TextField)({
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".MuiOutlinedInput-input": {
    padding: "9px 17px",
  },
});

const Searchbar: FC<ISearchbar> = ({
  maxWidth,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <SearchbarInput
      placeholder={placeholder}
      sx={{
        maxWidth: `${maxWidth}px`,
        maxHeight: "44px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "0 16px 3px 0",
      }}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img src={magnifier} alt="Search" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
