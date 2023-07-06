import React, { FC } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ISelect } from "../../Models/Bonami";

interface IMySelect {
  selectState: string;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
  selectList: ISelect[];
}

const MySelect: FC<IMySelect> = ({
  selectList,
  selectState,
  setSelectState,
}) => {
  const handler = (e: SelectChangeEvent) => {
    setSelectState(e.target.value as string);
  };

  const renderValue = (selected: string) => {
    return selectList.find((el) => el.value === selected)?.display || selected;
  };

  return (
    <Select
      value={selectState}
      onChange={handler}
      defaultValue={selectList[0].value}
      renderValue={renderValue}
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
      {selectList.map((selectListElement) => (
        <MenuItem
          key={selectListElement.value}
          value={selectListElement.value}
          sx={{
            display: selectState === selectListElement.value ? "none" : "block",
          }}
        >
          {selectListElement.display}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MySelect;
