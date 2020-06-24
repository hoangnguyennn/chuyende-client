import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserItemStyled } from "../styles";

const UserItemCart = styled(UserItemStyled.withComponent(Link))`
  color: #4b566b;

  :hover .icon-box {
    background-color: #dae1e7;
  }

  .icon-text {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc(100% - 14px);
    top: -4.5px;
    padding: 0 4px;
    min-width: 18px;
    height: 18px;
    background-color: #fe696a;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
  }
`;

export { UserItemCart as UserItemCartStyled };
