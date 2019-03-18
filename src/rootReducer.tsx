import { combineReducers } from "redux";
import signInReducer from "./Scenes/SignIn/SignInReducer";
import signUpReducer from "./Scenes/SignUp/SignUpReducer";
import catalogReducer from "./Scenes/Catalog/CatalogReducer";
import setSuperorderReducer from "./Scenes/SetSuperorder/SetSuperorderReducer";
import setOrderReducer from "./Scenes/SetOrder/SetOrderReducer";
const rootReducer = combineReducers({
    signIn:signInReducer,
    signUp:signUpReducer,
    catalog:catalogReducer,
    setSuperorder:setSuperorderReducer,
    setOrder:setOrderReducer
});

export default rootReducer;

