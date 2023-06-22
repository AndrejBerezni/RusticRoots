import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import showCartReducer from "./showCart";

const combinedReducers = combineReducers({
    cart: cartReducer,
    showCart: showCartReducer
});

export default combinedReducers;