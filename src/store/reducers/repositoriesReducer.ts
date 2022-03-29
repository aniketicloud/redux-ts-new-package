interface RepositoriesReducer {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionTypes {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

const reducer = (state: RepositoriesReducer, action: any) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return {};
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:

    default:
      return state;
  }
};

export default reducer;
