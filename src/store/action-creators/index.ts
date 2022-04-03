import axios from "axios";
import { ActionType } from "../action-types";
// import { ActionType } from "../action-types";
// import { Action } from "../actions";

const npm_search_url: string = "https://registry.npmjs.org/-/v1/search";

export const search_repositories = (searchTerm: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(npm_search_url, {
        params: {
          text: searchTerm,
        },
      });

      const package_names = data.objects.map(
        (object: { package: { name: string } }) => object.package.name
      );

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: package_names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
