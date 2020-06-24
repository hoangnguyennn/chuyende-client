import styled from "styled-components";
import { ContainerStyled } from "../Container/styles";

const Header = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 76px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;

  ${ContainerStyled} {
    display: flex;
    align-items: center;
  }
`;

export { Header as HeaderStyled };
