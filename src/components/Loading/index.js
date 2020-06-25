import React, { useContext } from "react";

import { LoadingStyled } from "./styles";
import { LoadingContext } from "../../contexts/loading.context";

const Loading = () => {
  const { isLoading } = useContext(LoadingContext);

  if (isLoading) {
    return (
      <LoadingStyled>
        <div className="circle"></div>
      </LoadingStyled>
    );
  } else {
    return null;
  }
};

export default Loading;
