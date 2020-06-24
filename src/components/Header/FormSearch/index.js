import React from "react";
import { FormSearchStyled } from "./styles";

const FormSearch = () => {
  return (
    <FormSearchStyled>
      <input />
      <button>
        <span className="material-icons">search</span>
      </button>
    </FormSearchStyled>
  );
};

export default FormSearch;
