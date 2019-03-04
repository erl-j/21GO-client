import { combineReducers } from "redux";
import signInReducer from "./Scenes/SignIn/SignInReducer";

const rootReducer = combineReducers({
    signIn:signInReducer
});

export default rootReducer;

