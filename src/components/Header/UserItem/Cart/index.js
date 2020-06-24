import React, { useContext } from "react";
import { UserItemCartStyled } from "./styles";

import { CartContext } from "../../../../contexts/cart.context";
import { cartAmount } from "../../../../helpers/calculator";

const UserItemCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <UserItemCartStyled to="/cart">
      <div className="icon-box">
        <span className="material-icons">shopping_cart</span>
        <span className="icon-text">{cartAmount(cart)}</span>
      </div>
    </UserItemCartStyled>
  );
};

export default UserItemCart;
