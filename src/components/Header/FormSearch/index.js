import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FormSearchStyled } from "./styles";

const FormSearch = () => {
  const location = useLocation();
  const history = useHistory();
  const [q, setSearch] = useState(
    new URLSearchParams(location.search).get("q") || ""
  );

  const submitFormSearch = (e) => {
    e.preventDefault();

    history.push(`/search?q=${q}`);
  };

  return (
    <FormSearchStyled>
      <input value={q} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={submitFormSearch}>
        <span className="material-icons">search</span>
      </button>
    </FormSearchStyled>
  );
};

export default FormSearch;
