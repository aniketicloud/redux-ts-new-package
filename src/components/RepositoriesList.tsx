import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(actionCreators.search_repositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name=""
          id=""
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
