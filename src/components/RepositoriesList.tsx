import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { search_repositories } = useActions();

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
    </div>
  );
};

export default RepositoriesList;
