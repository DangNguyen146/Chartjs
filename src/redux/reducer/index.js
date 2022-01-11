import { combineReducers } from "redux";

import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import clicktogle from "./../../components/NavBar/modules/reducer";

const rootReducer = combineReducers({
  userLoginReducer,
  clicktogle,
});

export default rootReducer;
