import React from "react";

import { EmptyCartStyled, EmptyCartButtonStyled } from "./styles";
import emptyCart from "../../../assets/images/emptycart.png";

const EmptyCart = () => {
  return (
    <EmptyCartStyled>
      <img src={emptyCart} alt="" />
      <p className="message">Không có sản phẩm nào trong giỏ hàng của bạn</p>
      <EmptyCartButtonStyled to="/" color="primary" shadow="true">
        Tiếp tục mua sắm
      </EmptyCartButtonStyled>
    </EmptyCartStyled>
  );
};

export default EmptyCart;
