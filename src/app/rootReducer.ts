import { combineReducers } from "@reduxjs/toolkit";
import travelsReducer from "../features/travels/travelsSlice";

const rootReducer = combineReducers({
  travels: travelsReducer
});

export default rootReducer;
