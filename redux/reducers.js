import { combineReducers } from "redux";

// Reducers
import exampleReducer from "./actions/example/reducer";

export default combineReducers({
  example: exampleReducer,
});
