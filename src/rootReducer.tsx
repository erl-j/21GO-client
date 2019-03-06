import { combineReducers } from "redux";
import signInReducer from "./Scenes/SignIn/SignInReducer";
import signUpReducer from "./Scenes/SignUp/SignUpReducer";
import catalogReducer from "./Scenes/Catalog/CatalogReducer";

const rootReducer = combineReducers({
    signIn:signInReducer,
    signUp:signUpReducer,
    catalog:catalogReducer
});

export default rootReducer;

