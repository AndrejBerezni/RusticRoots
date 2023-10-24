import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import showAlertReducer from './showAlert'
import showCartReducer from './showCart'
import showSignInReducer from './showSignIn'
import showSignInAlertReducer from './showSignInAlert'
import showSpinnerReducer from './showSpinner'
import signInReducer from './signIn'

const combinedReducers = combineReducers({
  cart: cartReducer,
  showCart: showCartReducer,
  signedIn: signInReducer,
  showSignIn: showSignInReducer,
  showSpinner: showSpinnerReducer,
  showAlert: showAlertReducer,
  showSignInAlert: showSignInAlertReducer,
})

export default combinedReducers
