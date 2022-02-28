import { ActionType } from "../action-types";
interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositories
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesError;
