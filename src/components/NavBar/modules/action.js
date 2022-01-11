import { ADD_TOGLE } from "./constant";

export const ClickTogle = (status) => {
  return {
    type: ADD_TOGLE,
    status,
  };
};
