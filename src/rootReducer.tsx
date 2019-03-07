import { combineReducers } from "redux";
import signInReducer from "./Scenes/SignIn/SignInReducer";
import signUpReducer from "./Scenes/SignUp/SignUpReducer";
import catalogReducer from "./Scenes/Catalog/CatalogReducer";
import setOrderReducer from "./Scenes/SetOrder/SetOrderReducer";

const rootReducer = combineReducers({
    signIn:signInReducer,
    signUp:signUpReducer,
    catalog:catalogReducer,
    setOrder:setOrderReducer
});

export default rootReducer;

