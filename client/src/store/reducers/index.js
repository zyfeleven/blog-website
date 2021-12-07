import {combineReducers} from "redux";

import currentUser from "./currentUser";
import error from "./error";

const rootReducer = combineReducers({
    currentUser,
    error
});

export default rootReducer;