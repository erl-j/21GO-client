import { combineReducers } from "redux";
import signInReducer from "./Scenes/Welcome/SignIn/SignInReducer";
import signUpReducer from "./Scenes/Welcome/SignUp/SignUpReducer";
import catalogReducer from "./Scenes/Catalog/CatalogReducer";
import setSuperorderReducer from "./Scenes/SetSuperorder/SetSuperorderReducer";
import setOrderReducer from "./Scenes/SetOrder/SetOrderReducer";
import accountReducer from "./Scenes/UserAccount/UserProfile/UserProfileReducer";
const rootReducer = combineReducers({
    signIn:signInReducer,
    signUp:signUpReducer,
    catalog:catalogReducer,
    setSuperorder:setSuperorderReducer,
    setOrder:setOrderReducer,
    account:accountReducer
});

export default rootReducer;

