import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { PanelListStyled } from "./styles";
import PanelPrice from "../Price";
import Button from "../../../Button";

const PanelList = () => {
  const location = useLocation();
  const history = useHistory();

  const resetFilter = () => {
    let q = new URLSearchParams(location.search).get("q");
    let searchParams = new URLSearchParams();

    searchParams.set("q", q);
    history.push({
      pathname: "/search",
      search: searchParams.toString()
    });
  };

  return (
    <PanelListStyled>
      <PanelPrice />
      <Button
        color="danger"
        block
        shadow
        className="reset"
        onClick={resetFilter}
      >
        Xóa bộ lọc
      </Button>
    </PanelListStyled>
  );
};

export default PanelList;
