import React from "react";
import { UserItemCartStyled } from "./styles";

const UserItemCart = () => {
  return (
    <UserItemCartStyled>
      <div className="icon-box">
        <span className="material-icons">shopping_cart</span>
        <span className="icon-text">4</span>
      </div>
    </UserItemCartStyled>
  );
};

export default UserItemCart;
