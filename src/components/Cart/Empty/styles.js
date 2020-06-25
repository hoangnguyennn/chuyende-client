import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../Button/styles";

const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  border: 1px solid #dae1e7;
  border-radius: 8px;

  .message {
    margin-bottom: 20px;
  }
`;

const EmptyCartButton = styled(ButtonStyled.withComponent(Link))`
  text-decoration: none;
`;

export {
  EmptyCart as EmptyCartStyled,
  EmptyCartButton as EmptyCartButtonStyled
};
