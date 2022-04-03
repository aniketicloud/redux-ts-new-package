import axios from "axios";
import { ActionType } from "../action-types";
// import { ActionType } from "../action-types";
// import { Action } from "../actions";

const search_repositories = (searchTerm) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
