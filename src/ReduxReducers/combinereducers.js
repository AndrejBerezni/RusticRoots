import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const combinedReducers = combineReducers({
    cart: cartReducer
});

export default combinedReducers;