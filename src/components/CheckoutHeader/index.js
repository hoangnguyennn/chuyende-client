import React from "react";
import { useLocation } from "react-router-dom";

import { CheckoutHeaderStyled } from "./styles";
import Container from "../Container";
import Logo from "../Header/Logo";
import Progress from "./Progress";

const CheckoutHeader = () => {
  const history = useLocation();
  let current = 0;

  switch (history.pathname) {
    case "/checkout/shipping":
      current = 2;
      break;
    case "/checkout/review":
      current = 3;
      break;
    default:
      current = 0;
  }

  return (
    <CheckoutHeaderStyled>
      <Container>
        <Logo />
        <Progress current={current} />
      </Container>
    </CheckoutHeaderStyled>
  );
};

export default CheckoutHeader;
