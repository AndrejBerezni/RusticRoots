import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import showCartReducer from "./showCart";
import signInReducer from "./signIn";
import showSignInReducer from "./showSignIn";

const combinedReducers = combineReducers({
  cart: cartReducer,
  showCart: showCartReducer,
  signedIn: signInReducer,
  showSignIn: showSignInReducer,
});

export default combinedReducers;
