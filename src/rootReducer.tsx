import { combineReducers } from "redux";
import signInReducer from "./Scenes/SignIn/SignInReducer";
import signUpReducer from "./Scenes/SignUp/SignUpReducer";
import catalogReducer from "./Scenes/Catalog/CatalogReducer";
import superorderReducer from "./Superorder/SuperorderReducer";

const rootReducer = combineReducers({
    signIn:signInReducer,
    signUp:signUpReducer,
    catalog:catalogReducer,
    superorder:superorderReducer
});

export default rootReducer;

