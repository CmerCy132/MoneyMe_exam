import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import searchReducer from './searchReducer'
export default combineReducers({
  search: searchReducer,
  modal : modalReducer
});
