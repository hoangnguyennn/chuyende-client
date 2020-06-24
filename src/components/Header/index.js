import React from "react";

import { HeaderStyled } from "./styles";
import Container from "../Container";
import Logo from "./Logo";
import FormSearch from "./FormSearch";
import UserItem from "./UserItem";
import UserItemCart from "./UserItem/Cart";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo />
        <FormSearch />
        <UserItem />
        <UserItemCart />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
