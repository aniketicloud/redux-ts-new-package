import { combineReducers } from "@reduxjs/toolkit";
import { repositoriesReducer } from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
