import { IUser } from "../../Models/ServerResponse";

const defaultState = {
  user: null,
};

export const userReducer = (
  state: { user: IUser | null } = defaultState,
  action: { type: string; payload: IUser }
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
