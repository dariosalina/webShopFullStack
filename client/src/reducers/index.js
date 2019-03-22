import { combineReducers } from "redux";
import adverts from "./adverts";
import advert from "./advert";
import users from "./users";
import login from "./login";
import currentUser from "./currentUser";
import signup from "./signup";

export default combineReducers({
  adverts,
  advert,
  login,
  signup,
  currentUser,
  users
});
