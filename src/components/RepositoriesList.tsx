import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { search_repositories } = useActions();
  // const state = useSelector((state:any) => state.repositories);
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    search_repositories(term);
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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading . . .</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
