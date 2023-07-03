import React, { FC, useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface IMySelect {
  selectState: string;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
  selectList: { value: string; display: React.ReactNode }[];
}

const MySelect: FC<IMySelect> = ({
  selectList,
  selectState,
  setSelectState,
}) => {
  const [selectValuesState, setSelectValuesState] = useState<
    { value: string; display: React.ReactNode }[]
  >(selectList.filter((value) => selectState !== value.value));

  const handler = (e: SelectChangeEvent) => {
    setSelectState(e.target.value as string);
  };

  useEffect(() => {
    if (selectState) {
      setSelectValuesState(
        selectList.filter((value) => selectState !== value.value)
      );
    }
  }, [selectState]);

  return (
    <Select
      value={selectState}
      onChange={handler}
      defaultValue={selectList[0].value}
      renderValue={(selected) => {
        return (
          selectList.find((el) => el.value === selected)?.display || selected
        );
      }}
      IconComponent={ArrowDropDownIcon}
      sx={{
        color: "white",
        border: "none",
        "& .MuiSvgIcon-root": {
          right: "unset",
          left: "-6px",
          color: "white",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiGrid-root": {
          padding: "0 0 0 17px",
        },
        "& .MuiInputBase-input": {
          padding: "0 !important",
        },
      }}
    >
      <MenuItem value={selectState} sx={{ display: "none" }} />
      {selectValuesState.map((selectListElement) => (
        <MenuItem key={selectListElement.value} value={selectListElement.value}>
          {selectListElement.display}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MySelect;
