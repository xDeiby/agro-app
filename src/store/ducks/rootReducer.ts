import { combineReducers } from "redux";
import exampleReducer from "./example";

const rootReducer = combineReducers({
    examples: exampleReducer,
});

export default rootReducer;
