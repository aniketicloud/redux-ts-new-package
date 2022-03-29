interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionTypes {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: false, error: null, data: [] };

    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
