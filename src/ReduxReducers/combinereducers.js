import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import showCartReducer from "./showCart";
import signInReducer from "./signIn";
import showSignInReducer from "./showSignIn";
import showSpinnerReducer from "./showSpinner";
import showAlertReducer from "./showAlert";
import showSignInAlertReducer from "./showSignInAlert";

const combinedReducers = combineReducers({
  cart: cartReducer,
  showCart: showCartReducer,
  signedIn: signInReducer,
  showSignIn: showSignInReducer,
  showSpinner: showSpinnerReducer,
  showAlert: showAlertReducer,
  showSignInAlert: showSignInAlertReducer,
});

export default combinedReducers;
